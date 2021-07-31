const models = require('./models')
async function test() {
    const dbdata = await models.Users.findAll()
    console.log(dbdata)
}
test()