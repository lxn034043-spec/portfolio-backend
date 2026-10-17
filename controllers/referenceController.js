const Reference = require("../models/reference");

// Get all references
exports.getAll = async (req, res, next) => {
  try {
    const references = await Reference.find();

    res.json({
      success: true,
      message: "References list retrieved successfully.",
      data: references
    });
  } catch (error) {
    next(error);
  }
};

// Get one reference by ID
exports.getByID = async (req, res, next) => {
  try {
    const reference = await Reference.findById(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found."
      });
    }

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: reference
    });
  } catch (error) {
    next(error);
  }
};

// Add a reference
exports.add = async (req, res, next) => {
  try {
    const reference = await Reference.create({
      name: req.body.name,
      testimonial: req.body.testimonial,
      position: req.body.position,
      company: req.body.company
    });

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: reference
    });
  } catch (error) {
    next(error);
  }
};

// Update a reference
exports.update = async (req, res, next) => {
  try {
    const reference = await Reference.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        testimonial: req.body.testimonial,
        position: req.body.position,
        company: req.body.company
      },
      { runValidators: true }
    );

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found."
      });
    }

    res.json({
      success: true,
      message: "Reference updated successfully."
    });
  } catch (error) {
    next(error);
  }
};

// Delete a reference
exports.remove = async (req, res, next) => {
  try {
    const reference = await Reference.findByIdAndDelete(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found."
      });
    }

    res.json({
      success: true,
      message: "Reference deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};