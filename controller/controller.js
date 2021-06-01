const { v4: uuidV4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const users = require('../jsons/users.json');
const { createHash, compareHash } = require('../helpers/hash');
const { findUserByEmail, find } = require('../helpers/queries');

const CAMINHO = path.join(__dirname, '..', 'jsons', 'users.json');

module.exports.renderizar = (req, res) => {
  res.render('index', { 
    title: 'LALERA Webinar',
    pagina: 'home'
   });
}

module.exports.login = (req, res) => {
    res.render('login', {
      pagina: 'login'
    });
};

module.exports.showCadastro = (req, res) => {
  res.render('cadastro', {
    pagina: 'cadastro',
    error: {},
    content: {},
  });
}

module.exports.cadastrar = (req, res) => {
  const { password, confirm_password, email } = req.body;
  // equivale
  // const password = req.body.password;
  // const confirm_password = req.body.confirm_password;

  const foundUser = findUserByEmail(email, users);

  if (foundUser) {
    res.render('cadastro', {
      error: {
        email: 'Email já cadastrado',
      },
      content: req.body,
    });
  }

  if (password !== confirm_password) {
    res.render('cadastro', {
      error: {
        senha: 'Senhas incompativeis',
      },
      content: req.body,
    });
  }

  const usuario = {
    id: uuidV4(),
    ...req.body,
    password: createHash(password),
  };

  delete usuario.confirm_password;

  users.push(usuario);

  fs.writeFileSync(CAMINHO, JSON.stringify(users));

  res.redirect('/');
};

module.exports.showLogin = function (req, res) {
  res.render('login');
};

module.exports.login = function (req, res) {
  const { email, password } = req.body;

  const foundUser = find(email,users, 'email');

  if (!foundUser) {
    return res.render('login');
  }

  if (!compareHash(password, foundUser.password)) {
    return res.render('login');
  } else {

  req.session.usuario = foundUser;

  res.redirect('/meusEventos');
  }
}
