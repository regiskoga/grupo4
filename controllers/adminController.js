const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment');
const session = require('express-session');
moment.locale('pt-BR')


module.exports = (async (req, res) => {
  const results = await models.Events.findAll({ order: [ ['activeEvent', 'DESC'], ['eventTerm'] ] })
  res.render('admin', {results, moment:moment});
})

//module.exports = ('/exit',(req,res)=>{
  //req.session.destroy();
  //res.redirect('/');
//})

