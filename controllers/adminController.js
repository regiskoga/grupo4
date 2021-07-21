const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment')
moment.locale('pt-BR')

module.exports = (async (req, res) => {
  const results = await models.Events.findAll({ order: [ ['activeEvent', 'DESC'], ['eventTerm'] ] })
  res.render('admin', {results, moment:moment});
})