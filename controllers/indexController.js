const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');
const moment = require('moment')
const express = require('express')
const app = express()
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

module.exports.access = (async (req, res) => { //post from live login 
  console.log(req.body)
  const results = await models.Events.findOne({ where: { id: req.query.event } })
  if (typeof results !== 'undefined' && results !== null) {
    res.render('access', { 
      results, 
      moment: moment,
      title: "Acesse o evento",
      accessData: req.body
     });
  }

})

module.exports.createSubscriber = (async (req, res) => {
  const data = req.body
  console.log(data)
  await models.Subscribers.create(data)
  res.status(201).redirect('/live?event=' + data.eventId + '&username=' + data.username +'&email=' + data.email)
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
        req.session.userId = userData.id;
        req.session.email = userData.email;
        req.session.name = userData.name;
        req.session.userType = userData.userType;

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



