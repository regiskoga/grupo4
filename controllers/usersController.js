const models = require('../models');
const bcrypt = require('bcrypt');
const moment = require('moment')
moment.locale('pt-BR')
//const salt = bcrypt.genSaltSync(10);

module.exports.createUsers = (async (req, res) => {
    const users = req.body
    const salt = await bcrypt.genSalt(10)
    users.password = await bcrypt.hash(users.password,salt)
    console.log(users)
    await models.Users.create(users)
    res.status(201).redirect('/inscritos')
})

module.exports.createUsersPage = (async (req, res) => {
    res.render('newUser')
})

module.exports.showUserById = (async (req, res) => {
    const userId = parseInt(req.params.id)
    const results = await models.Users.findAll({ where: { id: userId } })
    results.screen=1
    res.render('newUser', {results, moment:moment})
})



