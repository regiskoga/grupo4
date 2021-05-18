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

module.exports.cadastrar = (req, res) => {
  res.render('cadastro', {
    pagina: 'cadastro'
  });
}
