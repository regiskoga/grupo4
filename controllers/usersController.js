const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment')
moment.locale('pt-BR')
//const salt = bcrypt.genSaltSync(10);

module.exports.createUsers = (async (req, res) => {
    const users = req.body
    const salt = await bcrypt.genSalt(10)
    users.password = await bcrypt.hash(users.password, salt)
    //console.log(users)
    await models.Users.create(users)
    res.status(201).redirect('/inscritos')
})

module.exports.createUsersPage = (async (req, res) => {
    res.render('newUser')
})

module.exports.showUserById = (async (req, res) => {
    const userId = parseInt(req.params.id)
    const results = await models.Users.findOne({ where: { id: userId } })
    res.render('user', { results, moment: moment })
})

module.exports.removeById = (async (req, res) => {
    userId = await req.body.userId
    await models.Users.destroy({
        where: {
            id: req.body.userId
        }
    }).then(result => {
        res.status(304).redirect('/inscritos')
    }).catch(error => {
        res.status(409).redirect('/inscritos')
    })
    // const userId = parseInt(req.params.id)
    // const results = await models.Users.findOne({ where: { id: userId } })
    // res.render('user', {results, moment:moment})
})

module.exports.updateUser = (async (req, res) => {
    const form = req.body
    if (form.admin == "on") {
        dataAdmin = 1
    } else {
        dataAdmin = 0
    }
    if (form.active == "on") {
        dataActive = 1
    } else {
        dataActive = 0
    }

    if (req.body.password != "") {
        const record = await models.Users.update(
            {
                username: form.username,
                name: form.name,
                email: form.email,
                active: dataActive,
                userType: dataAdmin
            },
            { where: { id: form.userId } }
        )
    } else {
        const salt = await bcrypt.genSalt(10)
        encrypted = await bcrypt.hash(form.password, salt)
        console.log(encrypted)
        const record = await models.Users.update(
            {
                username: form.username,
                name: form.name,
                email: form.email,
                active: dataActive,
                userType: dataAdmin,
                password: encrypted
            },
            { where: { id: form.userId } }
        )
    }
    res.redirect('/user/' + req.body.userId)
})



