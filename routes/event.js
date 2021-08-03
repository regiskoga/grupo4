const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController')

router.get('/', eventController);
router.post('/changeImage', eventController.changeImage);
router.post('/formColorChange', eventController.formColorChange);
router.post('/formOptionsChange', eventController.formOptionsChange);
router.get('/new', eventController.newEvent);
router.post('/registration', eventController.registration);

module.exports = router;
