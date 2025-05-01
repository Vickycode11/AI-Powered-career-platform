const Test = require('../models/Test');
const User = require('../models/User');

// Analyze test responses
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

// Map question IDs to their respective categories
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

// Generate recommendations based on test results
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

// Submit test and save analyzed results
exports.submitTest = async (req, res) => {
    const { responses } = req.body;
    try {
        const analyzedResults = analyzeTest(responses);
        const test = await Test.create({
            userId: req.user.id,
            responses,
            analyzedResults,
        });

        const user = await User.findById(req.user.id);
        user.profileData.analyzedTestResults = analyzedResults;
        await user.save();

        res.json({ message: 'Test submitted successfully', test });
    } catch (err) {
        res.status(500).json({ message: 'Error processing test', error: err.message });
    }
};

// Fetch recommendations based on analyzed test results
exports.getRecommendations = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const testResults = user.profileData.analyzedTestResults;

        if (!testResults) {
            return res.status(400).json({ message: 'No test results found for user' });
        }

        const recommendations = generateRecommendations(testResults);
        res.json({ message: 'Recommendations fetched successfully', recommendations });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching recommendations', error: err.message });
    }
};
