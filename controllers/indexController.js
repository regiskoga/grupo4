const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');

module.exports = (req, res) => {
  if(!req.session.estaAutenticado){
    res.render('index', {
      title: 'Sistema de Transmissão', 
      erro: ''
     }); //index is EJS filename
  }else{
    res.redirect('/admin')
  }
  
}

module.exports.exit = (req, res) => {
  if(!req.session.estaAutenticado){
    res.redirect('/?erro=2')
  }
  req.session.destroy(function(err) {
    res.redirect('/')
  })  
}

module.exports.auth = (async (req, res, next) => {
  const userData = await models.Users.findOne({ where: { email: req.body.email } })
  if (!req.body.email || !req.body.password) {
    
    res.render('index', {title: 'Sistema de Transmissão', erro: 'E-mail e Senha são Obrigatórios' });
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

        res.redirect('/admin')
      } else {
        res.render('index', {title: 'Sistema de Transmissão', erro: 'Usuário ou senha inválido!' });
      }
    })
  } else {
    res.render('index', {title: 'Sistema de Transmissão', erro: 'Usuário ou senha inválido!' });
  }

})

module.exports.autentica = (req,res) => {
  req.session.usuarioAutenticado = true;
}



