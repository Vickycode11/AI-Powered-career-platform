const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getRecommendations);

module.exports = router;
