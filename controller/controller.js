module.exports.renderizar = (req, res) => {
  res.render('index', { 
    title: 'ALERA Webinar',
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
  const { password, confirm_password } = req.body;
  // equivale
  // const password = req.body.password;
  // const confirm_password = req.body.confirm_password;
  if (password !== confirm_password) {
    res.render('cadastro', {
      error: {
        senha: 'Senhas incompativeis',
      },
      content: req.body,
    });
  }
  res.send(req.body);
};
