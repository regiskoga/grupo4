const models = require('../models');
const bcrypt = require('bcrypt');
const querystring = require('querystring');


module.exports = (req, res) => {
  res.render('index', { title: 'teste do regis' }); //index is EJS filename
}

module.exports.auth = (async (req, res) => {
  const userData = await models.Users.findOne({ where: { email: req.body.email } })
  if (!req.body.email || !req.body.password) {
    return res.status(400).send(
      'Necessário Usuário e Senha para acessar o sistema'
    );
  }
  if (typeof userData !== 'undefined' && userData !== null) {
    bcrypt.compare(req.body.password, userData.password, function (err, res) {
      if (err) {
        console.log('erro')
      }
      if (res) {
        console.log('funcionou!')    
      } else {
        console.log('Senha incorreta')
      }
    })
  }else{
    const query = querystring.stringify({
      "msg":"Usuário Inválido"
    })
    res.redirect('/?'+ query)
  }

})



