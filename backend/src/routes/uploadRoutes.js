const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { protect } = require('../middleware/auth');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage engine configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `img-${uniqueSuffix}${ext}`);
  },
});

// File filter (accept images only)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, webp, gif) are allowed!'), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter,
});

// @desc    Upload single image
// @route   POST /v1/api/upload
// @access  Private
router.post('/', protect, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'Please upload an image file using field name "image"',
    });
  }

  const host = req.get('host');
  const protocol = req.protocol;
  const relativeUrl = `/uploads/${req.file.filename}`;
  const fullUrl = `${protocol}://${host}${relativeUrl}`;

  res.status(200).json({
    success: true,
    message: 'Image uploaded successfully',
    filename: req.file.filename,
    url: relativeUrl,
    fullUrl,
    size: req.file.size,
    mimetype: req.file.mimetype,
  });
});

// @desc    Upload multiple images
// @route   POST /v1/api/upload/multiple
// @access  Private
router.post('/multiple', protect, upload.array('images', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Please upload at least one image file using field name "images"',
    });
  }

  const host = req.get('host');
  const protocol = req.protocol;

  const uploadedFiles = req.files.map((file) => ({
    filename: file.filename,
    url: `/uploads/${file.filename}`,
    fullUrl: `${protocol}://${host}/uploads/${file.filename}`,
    size: file.size,
  }));

  res.status(200).json({
    success: true,
    count: uploadedFiles.length,
    data: uploadedFiles,
  });
});

module.exports = router;
