const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String
});

serviceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

module.exports = mongoose.model("Service", serviceSchema);