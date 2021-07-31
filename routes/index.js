const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController);
router.post('/',indexController.auth);
router.get('/exit', indexController.exit);
router.get('/access', indexController.access);
router.post('/access', indexController.createSubscriber);
module.exports = router;
