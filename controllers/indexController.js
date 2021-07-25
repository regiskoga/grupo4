const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');
const session = require('express-session');

module.exports = (req, res) => {
  if(!req.session.estaAutenticado){
    res.render('index', { title: 'teste do regis' }); //index is EJS filename
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
  req.session.atenticado = true;
  const query = querystring.stringify({
    "erro": "Erro ao acessar"
  })
  const userData = await models.Users.findOne({ where: { email: req.body.email } })
  if (!req.body.email || !req.body.password) {
    // return res.status(400).send(
    //   'Necessário Usuário e Senha para acessar o sistema'
    // );
    res.redirect('/?' + query)
  }
  if (typeof userData !== 'undefined' && userData !== null) {
    bcrypt.compare(req.body.password, userData.password, function (err, response) {
      if (err) {
        console.log('erro ao tentar logar')
        res.send(400)
        //res.redirect('/?'+ query)
      }
      if (response) {
        req.session.estaAutenticado = true;
        req.session.userId = req.body.id;
        req.session.email = req.body.email;
        req.session.name = req.body.name;

        res.redirect('/admin')
      } else {
        //console.log(query)
        res.send(401)
        //res.redirect('/?'+ query)
      }
    })
  } else {
    //console.log(query.invalid)
    //res.redirect('/?'+ query)
    res.send(401)
  }

})

module.exports.autentica = (req,res) => {
  req.session.usuarioAutenticado = true;
}



