const models = require('../models')
const date = require('date-and-time')
const moment = require('moment')
moment.locale('pt-BR')

module.exports = (async (req, res) => {
  const results = await models.Users.findAll()
  
  res.render('subscribers', {results, moment:moment});
})


// module.exports = (req, res) => {
//     res.render('subscribers', { title: 'teste do regis' });
//   }