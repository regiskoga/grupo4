const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');
const moment = require('moment')
moment.locale('pt-BR')

module.exports = (req, res) => {
  if (!req.session.estaAutenticado) {
    res.render('index', {
      title: 'Sistema de Transmissão',
      erro: ''
    }); //index is EJS filename
  } else {
    res.redirect('/admin')
  }

}

module.exports.access = (async (req, res) => {
  const results = await models.Events.findOne({ where: { id: req.query.event } })
  if (typeof results !== 'undefined' && results !== null) {
    res.render('access', { 
      results, 
      moment: moment,
      title: "Acesse o evento"
     });
  }
})

module.exports.createSubscriber = (async (req, res) => {
  const data = req.body
  await models.Subscribers.create(data)
  res.status(201).redirect('/live?event=' + req.body.eventId)
})

module.exports.exit = (req, res) => {
  if (!req.session.estaAutenticado) {
    res.redirect('/?erro=2')
  }
  req.session.destroy(function (err) {
    res.redirect('/')
  })
}

module.exports.auth = (async (req, res, next) => {
  const userData = await models.Users.findOne({ where: { email: req.body.email } })
  if (!req.body.email || !req.body.password) {

    res.render('index', { title: 'Sistema de Transmissão', erro: 'E-mail e Senha são Obrigatórios' });
  }
  if (typeof userData !== 'undefined' && userData !== null) {
    bcrypt.compare(req.body.password, userData.password, function (err, response) {
      if (err) {
        console.log('erro ao tentar logar')
      }
      if (response) {
        req.session.estaAutenticado = true;
        req.session.userId = req.body.id;
        req.session.email = req.body.email;
        req.session.name = req.body.name;
        req.session.userType = req.body.userType;

        res.redirect('/admin')
      } else {
        res.render('index', { title: 'Sistema de Transmissão', erro: 'Usuário ou senha inválido!' });
      }
    })
  } else {
    res.render('index', { title: 'Sistema de Transmissão', erro: 'Usuário ou senha inválido!' });
  }

})

module.exports.autentica = (req, res) => {
  req.session.usuarioAutenticado = true;
}



