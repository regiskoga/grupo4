const models = require('../models')
const date = require('date-and-time')

module.exports = (async (req, res) => {
  const results = await models.Users.findAll()
  
  res.render('subscribers', {results});
})


// module.exports = (req, res) => {
//     res.render('subscribers', { title: 'teste do regis' });
//   }