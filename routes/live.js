const express = require('express');
const router = express.Router();
const liveController = require('../controllers/liveController')

router.get('/', liveController);

module.exports = router;
