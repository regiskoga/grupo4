const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment');
const app = require('../app');
moment.locale('pt-BR')
const session = require('express-session');

module.exports = (async (req, res, next) => {
  if (!req.session.estaAutenticado) {
    res.redirect('/?erro=1')
  }
  const results = await models.Events.findAll({
    where: { idUser: req.session.userId } 
  })
    res.render('admin', { results, moment: moment }); 
})

