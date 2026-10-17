const Project = require("../models/project");

// Get all projects
exports.getAll = async (req, res, next) => {
  try {
    const projects = await Project.find();

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

// Get one project by ID
exports.getByID = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found."
      });
    }

    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: project
    });
  } catch (error) {
    next(error);
  }
};

// Add a project
exports.add = async (req, res, next) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      completion: req.body.completion,
      description: req.body.description,
      image: req.body.image
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
      data: project
    });
  } catch (error) {
    next(error);
  }
};

// Update a project
exports.update = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completion: req.body.completion,
        description: req.body.description,
        image: req.body.image
      },
      { runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found."
      });
    }

    res.json({
      success: true,
      message: "Project updated successfully."
    });
  } catch (error) {
    next(error);
  }
};

// Delete a project
exports.remove = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found."
      });
    }

    res.json({
      success: true,
      message: "Project deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};