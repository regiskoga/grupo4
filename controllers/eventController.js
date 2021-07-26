const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');
const moment = require('moment');
moment.locale('pt-BR')


module.exports = (async (req, res) => {
    const userData = await models.Events.findOne({ where: { id: req.query.id } })
    if (!req.session.estaAutenticado) {
        res.render('index', {  //index is EJS filename
            title: 'Sistema de Transmissão',
            erro: ''
        });
    }
    res.render('event', { userData, moment: moment });
})