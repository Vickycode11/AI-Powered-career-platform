// controllers/profileController.js
const Profile = require("../models/Profile");

exports.saveProfile = async (req, res) => {
  const { userId, name, email, contactInfo, address, collegeName, cgpa, profileImage } = req.body;

  try {
    // Validate incoming data
    if (!userId || !name || !email) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    // Check if profile exists
    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
      // Update profile
      existingProfile.name = name;
      existingProfile.email = email;
      existingProfile.contactInfo = contactInfo;
      existingProfile.address = address;
      existingProfile.collegeName = collegeName;
      existingProfile.cgpa = cgpa;
      existingProfile.profileImage = profileImage;
      await existingProfile.save();
      return res.json({ message: "Profile updated successfully" });
    }

    // Create new profile
    const newProfile = new Profile({ userId, name, email, contactInfo, address, collegeName, cgpa, profileImage });
    await newProfile.save();

    res.status(201).json({ message: "Profile saved successfully" });
  } catch (err) {
    console.error("Error saving profile:", err.message);
    res.status(500).json({ error: "Server error during profile save" });
  }
};
