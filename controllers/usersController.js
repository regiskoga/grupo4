const models = require('../models')

module.exports.createUsers = (async (req, res) => {
    const users = req.body
    await models.Users.create(users)
    //res.send(201)
    res.redirect('/inscritos')
})

module.exports.createUsersPage = (async (req, res) => {
    res.render('newUser')
})



