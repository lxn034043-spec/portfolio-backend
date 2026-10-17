const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running."
  });
});

// Handle unknown endpoints
app.use((req, res, next) => {
  next(createError(404, "Endpoint not found."));
});

// Global error handler: keep this last
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});