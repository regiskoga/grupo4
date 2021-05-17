module.exports.renderizar = (req, res) => {
  res.render('index', { 
    title: 'Your Webinar',
    pagina: 'home'
   });
}

module.exports.login = (req, res) => {
    res.render('login');
};

module.exports.cadastrar = (req, res) => {
  res.render('cadastro');
}
