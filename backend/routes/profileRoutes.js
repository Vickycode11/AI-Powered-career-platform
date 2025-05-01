const express = require("express");
const Profile = require("../models/Profile");
const mongoose = require("mongoose");

const router = express.Router();

// Create or Update Profile
router.post("/profile", async (req, res) => {
  const { userId, name, email, contactInfo, address, collegeName, cgpa, profileImage } = req.body;

  try {
    if (!userId || !name || !email) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId" });
    }

    // Check if profile exists
    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
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
    const newProfile = new Profile({
      userId,
      name,
      email,
      contactInfo,
      address,
      collegeName,
      cgpa,
      profileImage,
    });
    await newProfile.save();

    res.status(201).json({ message: "Profile created successfully" });
  } catch (err) {
    console.error("Profile Error:", err.message);
    res.status(500).json({ error: "Server error during profile handling" });
  }
});

module.exports = router;
