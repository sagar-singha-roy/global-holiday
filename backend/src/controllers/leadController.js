const Lead = require("../models/Lead");

// @desc    Get leads filtered by user role & assignments
// @route   GET /api/leads
// @access  Private
exports.getLeads = async (req, res, next) => {
  try {
    let query = {};

    if (
      req.user.role === "admin" ||
      req.user.role === "manager" ||
      (req.user.permissions && req.user.permissions.includes("leads"))
    ) {
      // Admin, Manager, or staff with leads permission see all leads
      query = {};
    } else {
      // Only filter by assignedTo or assignedPackages if restricted
      const assignedPkgIds = req.user.assignedPackages || [];
      query = {
        $or: [
          { assignedTo: req.user.id },
          { packageId: { $in: assignedPkgIds } },
        ],
      };
    }

    if (req.query.status) {
      query.status = req.query.status;
    }
    if (req.query.priority) {
      query.priority = req.query.priority;
    }
    if (req.query.search) {
      const searchRegex = { $regex: req.query.search, $options: "i" };
      const searchCondition = {
        $or: [
          { name: searchRegex },
          { phone: searchRegex },
          { email: searchRegex },
          { packageInterest: searchRegex },
        ],
      };
      if (query.$or) {
        query = { $and: [{ $or: query.$or }, searchCondition] };
      } else {
        query.$or = searchCondition.$or;
      }
    }

    const limit =
      req.query.limit !== undefined ? parseInt(req.query.limit, 10) : 0;
    const skip =
      req.query.skip !== undefined ? parseInt(req.query.skip, 10) : 0;

    const total = await Lead.countDocuments(query);
    let leadsQuery = Lead.find(query)
      .populate("assignedTo", "name email role")
      .populate("packageId", "title slug destination")
      .sort({ createdAt: -1 });

    if (skip > 0) {
      leadsQuery = leadsQuery.skip(skip);
    }
    if (limit > 0) {
      leadsQuery = leadsQuery.limit(limit);
    }

    const leads = await leadsQuery;

    res.status(200).json({
      success: true,
      count: leads.length,
      total,
      limit: limit > 0 ? limit : total,
      skip,
      data: leads,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private
exports.getLead = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate("assignedTo", "name email role")
      .populate("packageId", "title slug destination");

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    // Role check: non-admin/non-leads-staff can only see if assigned directly or package assigned
    const hasLeadAccess =
      req.user.role === "admin" ||
      req.user.role === "manager" ||
      (req.user.permissions && req.user.permissions.includes("leads"));

    if (!hasLeadAccess) {
      const assignedPkgIds = (req.user.assignedPackages || []).map((id) =>
        id.toString(),
      );
      const isAssignedDirectly =
        lead.assignedTo &&
        lead.assignedTo._id.toString() === req.user.id.toString();
      const isPackageAssigned =
        lead.packageId &&
        assignedPkgIds.includes(lead.packageId._id.toString());

      if (!isAssignedDirectly && !isPackageAssigned) {
        return res.status(403).json({
          success: false,
          message: "Access denied: You are not assigned to this lead",
        });
      }
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create lead (from public site or CRM)
// @route   POST /api/leads
// @access  Public or Private
exports.createLead = async (req, res, next) => {
  try {
    const leadData = { ...req.body };

    // If created by an authenticated user in CRM
    if (req.user) {
      if (!leadData.assignedTo && req.user.role !== "admin") {
        leadData.assignedTo = req.user.id;
      }
      if (!leadData.source) {
        leadData.source = "admin";
      }
    }

    const lead = await Lead.create(leadData);

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update lead (status, priority, details, assignment)
// @route   PUT /api/leads/:id
// @access  Private
exports.updateLead = async (req, res, next) => {
  try {
    let lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    const hasLeadAccess =
      req.user.role === "admin" ||
      req.user.role === "manager" ||
      (req.user.permissions && req.user.permissions.includes("leads"));

    // If no general lead access, verify assignment
    if (!hasLeadAccess) {
      const assignedPkgIds = (req.user.assignedPackages || []).map((id) =>
        id.toString(),
      );
      const isAssignedDirectly =
        lead.assignedTo &&
        lead.assignedTo.toString() === req.user.id.toString();
      const isPackageAssigned =
        lead.packageId && assignedPkgIds.includes(lead.packageId.toString());

      if (!isAssignedDirectly && !isPackageAssigned) {
        return res.status(403).json({
          success: false,
          message: "Access denied: You cannot edit this lead",
        });
      }

      // Non-privileged users cannot reassign lead to someone else
      delete req.body.assignedTo;
    }

    lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("assignedTo", "name email role")
      .populate("packageId", "title slug destination");

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add note to lead
// @route   POST /api/leads/:id/notes
// @access  Private
exports.addLeadNote = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Note text is required",
      });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    lead.notes.unshift({
      text,
      addedBy: req.user.id,
      addedByName: req.user.name,
      addedAt: new Date(),
    });

    await lead.save();

    res.status(200).json({
      success: true,
      message: "Note added successfully",
      data: lead.notes,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin only)
exports.deleteLead = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    await lead.deleteOne();

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
