const User = require("../models/user");

// Get all users
exports.getAll = async (req, res, next) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: users
    });
  } catch (error) {
    next(error);
  }
};

// Get one user by ID
exports.getByID = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Add a user
exports.add = async (req, res, next) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Update a user
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        updated: new Date()
      },
      { runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    res.json({
      success: true,
      message: "User updated successfully."
    });
  } catch (error) {
    next(error);
  }
};

// Delete a user
exports.remove = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};