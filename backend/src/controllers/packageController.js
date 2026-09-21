const Package = require('../models/Package');
const User = require('../models/User');

// @desc    Get packages with Role-Based filtering
// @route   GET /api/packages
// @access  Private (or Public for website)
exports.getPackages = async (req, res, next) => {
  try {
    let query = {};

    // If user is authenticated and NOT admin, filter to only assigned packages
    if (req.user) {
      if (req.user.role === 'admin') {
        // Admin sees all packages
        query = {};
      } else {
        // Manager or Sales: ONLY sees packages assigned to them
        const assignedIds = req.user.assignedPackages || [];
        query = { _id: { $in: assignedIds } };
      }
    } else {
      // Public website call: only active packages
      query = { isActive: true };
    }

    // Optional category / search query filters
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.search) {
      query.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { destination: { $regex: req.query.search, $options: 'i' } },
      ];
    }

    const limit = req.query.limit !== undefined ? parseInt(req.query.limit, 10) : 0;
    const skip = req.query.skip !== undefined ? parseInt(req.query.skip, 10) : 0;

    const total = await Package.countDocuments(query);
    let pkgQuery = Package.find(query).sort({ featuredOrder: 1, createdAt: -1 });

    if (skip > 0) {
      pkgQuery = pkgQuery.skip(skip);
    }
    if (limit > 0) {
      pkgQuery = pkgQuery.limit(limit);
    }

    const packages = await pkgQuery;

    res.status(200).json({
      success: true,
      count: packages.length,
      total,
      limit: limit > 0 ? limit : total,
      skip,
      data: packages,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single package
// @route   GET /api/packages/:id
// @access  Private
exports.getPackage = async (req, res, next) => {
  try {
    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found',
      });
    }

    // RBAC: If not admin, check if user is assigned to this package
    if (req.user && req.user.role !== 'admin') {
      const isAssigned = (req.user.assignedPackages || []).some(
        (id) => id.toString() === pkg._id.toString()
      );
      if (!isAssigned) {
        return res.status(403).json({
          success: false,
          message: 'Access denied: You are not assigned to this package',
        });
      }
    }

    res.status(200).json({
      success: true,
      data: pkg,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new package
// @route   POST /api/packages
// @access  Private (Admin only)
exports.createPackage = async (req, res, next) => {
  try {
    req.body.createdBy = req.user.id;
    const pkg = await Package.create(req.body);

    res.status(201).json({
      success: true,
      data: pkg,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update package
// @route   PUT /api/packages/:id
// @access  Private (Admin only)
exports.updatePackage = async (req, res, next) => {
  try {
    let pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found',
      });
    }

    pkg = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: pkg,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete package
// @route   DELETE /api/packages/:id
// @access  Private (Admin only)
exports.deletePackage = async (req, res, next) => {
  try {
    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found',
      });
    }

    await pkg.deleteOne();

    // Also pull from any user's assignedPackages
    await User.updateMany(
      { assignedPackages: pkg._id },
      { $pull: { assignedPackages: pkg._id } }
    );

    res.status(200).json({
      success: true,
      message: 'Package deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
