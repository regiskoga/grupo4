
const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment')
moment.locale('pt-BR')

//module.exports = (async (req, res) => {
  // const eventData = await models.Events.findOne({ where: { id: req.query.event } })
  // if (typeof eventData !== 'undefined' && eventData !== null) {
  //   res.render('index', {  //index is EJS filename
  //     title: 'Sistema de Transmissão',
  //     erro: ''
  //   });
  //   res.render('live', { eventData, moment: moment });
  // }
//})

module.exports = (async (req, res) => {
  const results = await models.Events.findOne({ where: { id: req.query.event } })
  if (typeof results !== 'undefined' && results !== null) {
    res.render('live', { results, moment: moment });
  }
  })