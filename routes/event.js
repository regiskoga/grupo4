const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController')

router.get('/', eventController);
router.post('/changeImage', eventController.changeImage);
router.post('/formDataChange', eventController.formDataChange);
module.exports = router;
