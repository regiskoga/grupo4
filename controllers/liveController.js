const models = require('../models')
const bcrypt = require('bcrypt')
const moment = require('moment')
moment.locale('pt-BR')

const firebase = require('firebase')
const firebaseConfig = { //obtido no site do firebase (criação de app)
  apiKey: "AIzaSyDVXt3e1d65xp0risAIdSEasz_AD5zLN_w",
  authDomain: "grupo4-d5d47.firebaseapp.com",
  databaseURL: "https://grupo4-d5d47-default-rtdb.firebaseio.com",
  projectId: "grupo4-d5d47",
  storageBucket: "grupo4-d5d47.appspot.com",
  messagingSenderId: "940721492059",
  appId: "1:940721492059:web:af8b49c1d8ffc30b42af7e"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database();

function writeUserData(username, email, eventId) {
  let msgbase = firebase.database().ref(eventId)
  let msgrec = msgbase.push()
  msgrec.set({
    username: username,
    email: email,
    sentAt: Date.now()
  })
}

module.exports = (async (req, res) => {
  const data = req.query
  const results = await models.Events.findOne({ where: { id: data.event } })
  writeUserData(data.username, data.email, data.event)
  if (typeof results !== 'undefined' && results !== null) {
    res.render('live', {
      results,
      moment: moment
    });
  }
})