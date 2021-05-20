const express = require('express');
const router = express.Router();

const {
    login,
    showCadastro,
    cadastrar,
 } = require('../controller/controller');

router.get('/', login);
router.get('/cadastro', showCadastro);
router.post('/cadastrar', cadastrar)

module.exports = router;
