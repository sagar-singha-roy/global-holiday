const Package = require('../models/Package');
const Lead = require('../models/Lead');
const User = require('../models/User');

// @desc    Get dashboard statistics scoped to user's role
// @route   GET /api/dashboard/stats
// @access  Private
exports.getStats = async (req, res, next) => {
  try {
    const isSuperAdmin = req.user.role === 'admin';
    const assignedPkgIds = req.user.assignedPackages || [];

    let leadQuery = {};
    let packageQuery = {};

    if (isSuperAdmin) {
      leadQuery = {};
      packageQuery = {};
    } else {
      packageQuery = { _id: { $in: assignedPkgIds } };
      leadQuery = {
        $or: [
          { assignedTo: req.user.id },
          { packageId: { $in: assignedPkgIds } },
        ],
      };
    }

    const [
      packageCount,
      userCount,
      totalLeads,
      newLeads,
      convertedLeads,
      recentLeads,
    ] = await Promise.all([
      Package.countDocuments(packageQuery),
      isSuperAdmin ? User.countDocuments() : Promise.resolve(0),
      Lead.countDocuments(leadQuery),
      Lead.countDocuments({ ...leadQuery, status: 'new' }),
      Lead.countDocuments({ ...leadQuery, status: 'converted' }),
      Lead.find(leadQuery)
        .populate('assignedTo', 'name email')
        .populate('packageId', 'title')
        .sort({ createdAt: -1 })
        .limit(5),
    ]);

    res.status(200).json({
      success: true,
      data: {
        role: req.user.role,
        isSuperAdmin,
        packages: packageCount,
        users: userCount,
        totalLeads,
        newLeads,
        convertedLeads,
        conversionRate:
          totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0,
        recentLeads,
      },
    });
  } catch (err) {
    next(err);
  }
};
