// exports.getRecommendations = async (req, res) => {
//     try {
//         const recommendations = generateRecommendations(req.user.profileData.analyzedTestResults);
//         res.json(recommendations);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching recommendations' });
//     }
// };

// // Dummy function for generating recommendations
// const generateRecommendations = (testResults) => {
//     return testResults.score > 50 ? ['Career A', 'Career B'] : ['Career C', 'Career D'];
// };
