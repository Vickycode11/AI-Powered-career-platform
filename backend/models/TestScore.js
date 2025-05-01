const mongoose = require("mongoose");

const TestScoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    personalityTestScore: { type: Number },
    technicalSkillsTestScore: { type: Number },
});

module.exports = mongoose.model("TestScore", TestScoreSchema);
