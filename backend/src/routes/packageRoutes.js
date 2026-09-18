const express = require('express');
const router = express.Router();
const {
  getPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage,
} = require('../controllers/packageController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');

// Optional auth helper: if token provided, sets req.user, else continues
const optionalProtect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    return protect(req, res, next);
  }
  next();
};

router
  .route('/')
  .get(optionalProtect, getPackages)
  .post(protect, authorize('admin'), createPackage);

router
  .route('/:id')
  .get(protect, getPackage)
  .put(protect, authorize('admin'), updatePackage)
  .delete(protect, authorize('admin'), deletePackage);

module.exports = router;
