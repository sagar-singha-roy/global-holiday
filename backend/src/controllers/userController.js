const User = require('../models/User');
const Package = require('../models/Package');

// @desc    Get all users
// @route   GET /api/users
// @access  Private (Admin only)
exports.getUsers = async (req, res, next) => {
  try {
    const limit = req.query.limit !== undefined ? parseInt(req.query.limit, 10) : 0;
    const skip = req.query.skip !== undefined ? parseInt(req.query.skip, 10) : 0;

    const total = await User.countDocuments();
    let userQuery = User.find()
      .populate('assignedPackages', 'title slug destination duration category')
      .sort({ createdAt: -1 });

    if (skip > 0) {
      userQuery = userQuery.skip(skip);
    }
    if (limit > 0) {
      userQuery = userQuery.limit(limit);
    }

    const users = await userQuery;

    res.status(200).json({
      success: true,
      count: users.length,
      total,
      limit: limit > 0 ? limit : total,
      skip,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private (Admin only)
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate('assignedPackages');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new user (with role & package assignment)
// @route   POST /api/users
// @access  Private (Admin only)
exports.createUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      role,
      assignedPackages,
      assignedDestinations,
      phone,
      permissions,
    } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'A user with this email already exists',
      });
    }

    const defaultPerms =
      role === 'admin'
        ? ['dashboard', 'packages', 'leads', 'users', 'settings']
        : ['dashboard', 'packages', 'leads', 'settings'];

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      role: role || 'sales',
      permissions: permissions && permissions.length > 0 ? permissions : defaultPerms,
      assignedPackages: assignedPackages || [],
      assignedDestinations: assignedDestinations || [],
      phone: phone || '',
    });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        permissions: user.permissions,
        assignedPackages: user.assignedPackages,
        assignedDestinations: user.assignedDestinations,
        phone: user.phone,
        isActive: user.isActive,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update user details, role or status
// @route   PUT /api/users/:id
// @access  Private (Admin only)
exports.updateUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      role,
      phone,
      permissions,
      isActive,
      assignedPackages,
      assignedDestinations,
    } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (name) user.name = name;
    if (email) user.email = email.toLowerCase();
    if (role) user.role = role;
    if (phone !== undefined) user.phone = phone;
    if (permissions !== undefined) user.permissions = permissions;
    if (isActive !== undefined) user.isActive = isActive;
    if (assignedPackages !== undefined) user.assignedPackages = assignedPackages;
    if (assignedDestinations !== undefined) user.assignedDestinations = assignedDestinations;

    // If password provided in update
    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();

    const updatedUser = await User.findById(user._id).populate(
      'assignedPackages',
      'title slug destination'
    );

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Assign packages to user
// @route   POST /api/users/:id/assign
// @access  Private (Admin only)
exports.assignPackages = async (req, res, next) => {
  try {
    const { packageIds, destinations } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (packageIds) {
      user.assignedPackages = packageIds;
    }
    if (destinations) {
      user.assignedDestinations = destinations;
    }

    await user.save();

    const populatedUser = await User.findById(user._id).populate(
      'assignedPackages',
      'title slug destination duration category'
    );

    res.status(200).json({
      success: true,
      message: 'Package assignments updated successfully',
      data: populatedUser,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private (Admin only)
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Don't allow admin to delete their own account
    if (user._id.toString() === req.user.id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own admin account',
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
