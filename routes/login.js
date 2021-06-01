const express = require('express');
const router = express.Router();

const {
    showLogin,
    login,
    showCadastro,
    cadastrar,
 } = require('../controller/controller');

router.get('/', showLogin);
router.post('/', login);
router.get('/cadastro', showCadastro);
router.post('/cadastrar', cadastrar)

module.exports = router;
