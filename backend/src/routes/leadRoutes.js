const express = require('express');
const router = express.Router();
const {
  getLeads,
  getLead,
  createLead,
  updateLead,
  addLeadNote,
  deleteLead,
} = require('../controllers/leadController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');

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
  .get(protect, getLeads)
  .post(optionalProtect, createLead);

router
  .route('/:id')
  .get(protect, getLead)
  .put(protect, updateLead)
  .delete(protect, authorize('admin'), deleteLead);

router.route('/:id/notes').post(protect, addLeadNote);

module.exports = router;
