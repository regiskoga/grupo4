const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/', adminController)
router.get('/togglePublish', adminController.togglePublish)

module.exports = router;
