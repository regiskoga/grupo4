const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');


module.exports = (req, res, next) => {
    res.render('event', { title: 'teste do regis' });
}