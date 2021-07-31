const path = require('path');
const models = require('../models');
const bcrypt = require('bcrypt');
const multer = require('multer');
const querystring = require('querystring');
const session = require('express-session');
const moment = require('moment');
moment.locale('pt-BR')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage });


module.exports = (async (req, res) => {
    const userData = await models.Events.findOne({ where: { id: req.query.id } })
    const subscribersData = await models.Subscribers.findAll({ where: { eventId: req.query.id } })
    if (!req.session.estaAutenticado) {
        res.render('index', {  //index is EJS filename
            title: 'Sistema de Transmissão',
            erro: ''
        });
    }
    res.render('event', { userData, moment: moment, subscribersData });
})

module.exports.changeImage = ([upload.single('imageFile'), (req, res) => {
    console.log(req.body);  // form fields
    console.log(req.file); // form files
    res.status(204).end()

}])