const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  completion: Date,
  description: String,
  image: String
});

projectSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

module.exports = mongoose.model("Project", projectSchema);