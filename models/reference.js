const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema({
  name: String,
  testimonial: String,
  position: String,
  company: String
});

referenceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

module.exports = mongoose.model("Reference", referenceSchema);