const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactInfo: { type: String },
  address: { type: String },
  collegeName: { type: String },
  cgpa: { type: String },
  profileImage: { type: String },
});

module.exports = mongoose.model("Profile", ProfileSchema);
