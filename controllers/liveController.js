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

function writeUserData(userId, userName, email, message) {
  firebase.database().ref('users/' + userId).set({
    userName: userName,
    email: email,
    Message : message
  });
}

//module.exports = (async (req, res) => {
  // const eventData = await models.Events.findOne({ where: { id: req.query.event } })
  // if (typeof eventData !== 'undefined' && eventData !== null) {
  //   res.render('index', {  //index is EJS filename
  //     title: 'Sistema de Transmissão',
  //     erro: ''
  //   });
  //   res.render('live', { eventData, moment: moment });
  // }
//})

module.exports = (async (req, res) => {
  const results = await models.Events.findOne({ where: { id: req.query.event } })
  
  writeUserData('333', 'Regis', 'tradrek@gmail.com', 'Esta é uma mensagem!')
  if (typeof results !== 'undefined' && results !== null) {
    res.render('live', { results, moment: moment });
  }
  })