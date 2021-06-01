const express = require('express');
const app = require('../app');
const router = express.Router();

const index = require('../controller/controller');

const checkSession = require('../middleware/checkSession');

router.get('/', index.renderizar);

module.exports = router;
