const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/:id',usersController.showUserById);
router.post('/removeUser',usersController.removeById);
router.post('/updateUser',usersController.updateUser);

module.exports = router;