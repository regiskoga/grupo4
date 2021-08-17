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
const database = firebase.database()


function writeUserData(username, email, eventId, message) {
  let msgbase = firebase.database().ref(eventId)
  let msgrec = msgbase.push()
  msgrec.set({
    username: username,
    email: email,
    sentAt: Date.now(),
    message: message
  })
}

function listar(eventId){
  let referencia = firebase.database().ref(eventId);
  referencia.on('value',(snapshot)=>{
    //console.log(snapshot.val())
  })
}


module.exports = (async (req, res) => {
  const data = req.query
  const results = await models.Events.findOne({ where: { id: data.event } })
  let referencia = firebase.database().ref(data.event);
  referencia.on('value',(snapshot)=>{
    chatData = JSON.stringify(snapshot.val())
    //console.log(chatData)
  })
  if (typeof results !== 'undefined' && results !== null) {
    res.render('live', {
      results,
      moment: moment,
      userData: data,
      chatData: chatData
    });
  }
})

module.exports.chatMessage = (async (req, res) => {
  data = req.body
  writeUserData(data.username, data.email, data.eventId, data.message) 
  listar(data.eventId)
})

