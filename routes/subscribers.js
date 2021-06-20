const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController')

/* GET subscribers */
router.get('/', subscriberController);

module.exports = router;
