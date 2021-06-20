const models = require('./models')
async function test() {
    const users = await models.Users.findAll()
    console.log(users)
}
test()