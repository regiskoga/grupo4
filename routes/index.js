const express = require('express');
const router = express.Router();

const index = require('../controller/controller');

router.get('/', index.renderizar);

module.exports = router;
