const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.post('/', usersController.createUsers);
router.get('/', usersController.createUsersPage);

module.exports = router;