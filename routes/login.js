const express = require('express');
const router = express.Router();

const login = require('../controller/controller');

router.get('/', login.login);
router.get('/cadastro', login.cadastrar);

module.exports = router;
