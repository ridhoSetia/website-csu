const express = require('express');
const router = express.Router();
const webinarController = require('../controllers/webinarController');

// POST /api/webinar/register - Register for webinar
router.post('/register', webinarController.registerWebinar);

// GET /api/webinar/list - Get available webinars
router.get('/list', webinarController.getWebinars);

module.exports = router;
