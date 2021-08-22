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

module.exports.togglePublish = (async (req, res) => {
  if (!req.session.estaAutenticado) {
    res.redirect('/?erro=1')
  }
  const toggleData = await models.Events.findOne({ where: { id: req.query.id } })
  let activeStatus = ''
  if (toggleData.activeEvent === 1){
    activeStatus = 0
  } else{
    activeStatus = 1  
  }
  console.log('toggledata='+toggleData.id)
  toggle = await models.Events.update(
    { activeEvent: activeStatus},
    { where: { id: toggleData.id } }
  )
  res.status(204).redirect(req.get('referer'))

})

