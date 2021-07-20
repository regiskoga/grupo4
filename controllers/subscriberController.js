const models = require('../models')
const date = require('date-and-time')
const moment = require('moment')
moment.locale('pt-BR')

module.exports = (async (req, res) => {
  const results = await models.Users.findAll({ where: { active: 1 } })
  
  res.render('subscribers', {results, moment:moment});
})


// module.exports = (req, res) => {
//     res.render('subscribers', { title: 'teste do regis' });
//   }