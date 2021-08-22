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
        let nomeArquivo = Date.now() + path.extname(file.originalname)
        cb(null, nomeArquivo)
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
    const filename = req.file.filename
    const eventId = req.body.eventId
    //console.log(req.body);  // form fields
    //console.log(req.file); // form files
    data = models.Events.update(
        { loginImagePath: filename
        },
        { where: { id: eventId } }
    )
    res.status(204).redirect('/event?id='+ eventId);

}])

module.exports.formColorChange = (async (req, res) => {
    const headerColor = req.body.headerColor
    const footerColor = req.body.footerColor
    const fontColor = req.body.fontColor
    const backgroundColor = req.body.backgroundColor
    const eventId = req.body.eventId
    //const userData = req.body.userData
    data = await models.Events.update(
        { headerColor: headerColor,
          footerColor: footerColor,
          fontColor: fontColor,
          backgroundColor: backgroundColor
        },
        { where: { id: eventId } }
    )
    res.status(204).end()

})

module.exports.formOptionsChange = (async (req, res) => {
    const activeChat = req.body.activeChat
    const activePoll = req.body.activePoll
    const privateWebinar = req.body.privateWebinar
    const activeEvent = req.body.activeEvent
    const eventId = req.body.eventId
    data = await models.Events.update(
        { activeChat: activeChat,
          activePoll: activePoll,
          privateWebinar: privateWebinar,
          activeEvent: activeEvent
        },
        { where: { id: eventId } }
    )
    res.status(204).end()

})

module.exports.new = (async (req, res) => {
    res.render('newEvent')

})

module.exports.registration = (async (req, res) => {
    
    data = req.body;
    eventTerm = new Date(req.body.eventDate + " " + req.body.eventTime)
    eventPeriod = parseInt(req.body.eventPeriod)
    record = {
        idUser: req.session.userId,
        title: data.title,
        subtitle: data.subtitle,
        iframe: data.iframe,
        eventTerm: eventTerm,
        eventPeriod: eventPeriod
    }
    console.log(record)
    await models.Events.create(record).then(result => res.redirect('./?id=' + result.id))
})
