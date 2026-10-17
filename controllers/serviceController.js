const Service = require("../models/service");

// Get all services
exports.getAll = async (req, res, next) => {
  try {
    const services = await Service.find();

    res.json({
      success: true,
      message: "Services list retrieved successfully.",
      data: services
    });
  } catch (error) {
    next(error);
  }
};

// Get one service by ID
exports.getByID = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found."
      });
    }

    res.json({
      success: true,
      message: "Service retrieved successfully.",
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// Add a service
exports.add = async (req, res, next) => {
  try {
    const service = await Service.create({
      title: req.body.title,
      description: req.body.description
    });

    res.status(201).json({
      success: true,
      message: "Service added successfully.",
      data: service
    });
  } catch (error) {
    next(error);
  }
};

// Update a service
exports.update = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description
      },
      { runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found."
      });
    }

    res.json({
      success: true,
      message: "Service updated successfully."
    });
  } catch (error) {
    next(error);
  }
};

// Delete a service
exports.remove = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found."
      });
    }

    res.json({
      success: true,
      message: "Service deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};