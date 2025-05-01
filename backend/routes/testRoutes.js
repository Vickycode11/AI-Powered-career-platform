const express = require('express');
const Test = require('../models/Test');
const User = require('../models/User');
const router = express.Router();

// Helper function to analyze test responses
const analyzeTest = (responses) => {
    const categories = {
        aptitude: { weight: 0.4, totalScore: 0, count: 0 },
        interest: { weight: 0.3, totalScore: 0, count: 0 },
        personality: { weight: 0.3, totalScore: 0, count: 0 },
    };

    responses.forEach((response) => {
        const category = mapQuestionToCategory(response.questionId);
        if (category && categories[category]) {
            categories[category].totalScore += response.value;
            categories[category].count += 1;
        }
    });

    let totalWeightedScore = 0;
    const categoryScores = Object.keys(categories).map((key) => {
        const { totalScore, count, weight } = categories[key];
        const averageScore = count > 0 ? totalScore / count : 0;
        totalWeightedScore += averageScore * weight;
        return {
            category: key,
            averageScore: Math.round(averageScore),
        };
    });

    return {
        score: Math.round(totalWeightedScore),
        categoryScores,
    };
};

// Helper function to map question IDs to categories
const mapQuestionToCategory = (questionId) => {
    const questionCategoryMapping = {
        1: 'aptitude',
        2: 'aptitude',
        6: 'aptitude',
        7: 'aptitude',
        3: 'interest',
        8: 'interest',
        10: 'interest',
        4: 'personality',
        5: 'personality',
        9: 'personality',
    };
    return questionCategoryMapping[questionId] || null;
};

// Helper function to generate career recommendations
const generateRecommendations = (testResults) => {
    const { score, categoryScores } = testResults;

    if (score > 80) {
        return {
            message: 'High aptitude detected!',
            careerOptions: ['Data Scientist', 'Software Engineer', 'AI Specialist'],
            courses: ['Advanced Machine Learning', 'Data Structures and Algorithms'],
            categoryInsights: categoryScores,
            counselorRecommendation: 'Optional: Consult if targeting niche fields.',
        };
    } else if (score > 50) {
        return {
            message: 'Moderate aptitude detected!',
            careerOptions: ['Web Developer', 'System Analyst'],
            courses: ['Full-Stack Web Development', 'Introduction to Systems Analysis'],
            categoryInsights: categoryScores,
            counselorRecommendation: 'Recommended: Clarify career direction.',
        };
    } else {
        return {
            message: 'Low aptitude detected. Guidance suggested!',
            careerOptions: ['Technical Support Specialist', 'IT Help Desk'],
            courses: ['Basics of IT', 'Problem-Solving Skills for IT'],
            categoryInsights: categoryScores,
            counselorRecommendation: 'Mandatory: Meet with a career counselor.',
        };
    }
};

// Route to submit the test
router.post('/submit', async (req, res) => {
    const { responses, userId } = req.body;
    
    try {
        // Analyze the responses
        const analyzedResults = analyzeTest(responses);
        
        // Create a new test document in the database
        const newTest = new Test({
            userId,
            responses,
            analyzedResults,
        });

        await newTest.save();

        // Update user profile with analyzed test results
        const user = await User.findById(userId);
        user.profileData.analyzedTestResults = analyzedResults;
        await user.save();

        res.json({ message: 'Test submitted successfully', test: newTest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error processing test', error: err.message });
    }
});

// Route to fetch recommendations based on test results
router.get('/recommendations', async (req, res) => {
    const { userId } = req.query;

    try {
        const user = await User.findById(userId);
        if (!user || !user.profileData.analyzedTestResults) {
            return res.status(400).json({ message: 'No test results found for user' });
        }

        const recommendations = generateRecommendations(user.profileData.analyzedTestResults);
        res.json({ message: 'Recommendations fetched successfully', recommendations });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching recommendations', error: err.message });
    }
});

module.exports = router;
