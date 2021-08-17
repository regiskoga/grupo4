const express = require('express');
const router = express.Router();
const liveController = require('../controllers/liveController')

router.get('/', liveController);
router.post('/chatMessage', liveController.chatMessage);


module.exports = router;
