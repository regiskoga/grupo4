// instalar express generator
// npm install -g express-generator
// express --view=ejs
// npm install
// -----------------------------------------------------------------------
// renomear as pastas
// trocar var por const
// criar pasta controller
// remover o controller da rota
// Ex.:
// tirar o req res do router.get em index.js dentro de routes
// colocar o req res na pasta routes
// colocar na index.js: 
// const indexController  =require('../controllers/indexController')
// router.get('/', indexController.index)
// colocar em indexController.js:
// module.exports.index = (req, res, next) => {
//     res.render('index', { title: 'Express' });
// }
// ---------------------------------------------------------------------------

//criação de senha criptografada com bcrypt
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const senha = bcrypt.hashSync('770125',salt)
console.log(senha)
// comparar a senha criptografadao
const resultado = bcrypt.compareSync('770125',senha)
console.log(resultado)

