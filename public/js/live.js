const results = JSON.parse(jsonResults)
const userData = JSON.parse(jsonUserData)

document.querySelector('#header').classList.remove("bg-primary")
document.querySelector('#header').style.background = results.headerColor
document.querySelector('.textHeader').style.color = results.fontColor
document.querySelector('#exitButton').style.color = results.fontColor

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

let referencia = firebase.database().ref('1');
  referencia.on('value',(snapshot)=>{
    alert(snapshot.val())
    document.querySelector("#chat").value = snapshot.val()
  })


function sendPost(url, dataChat) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(dataChat))

    return request.responseText
}

function sendMessage() {
    let dataChat = {
        message: document.querySelector("#chatMessage").value,
        username: userData.username,
        email: userData.email,
        eventId: userData.event
    }
    const url = '/live/chatMessage'
    if (dataChat != "") {
        sendPost(url, dataChat)
        document.querySelector("#chatMessage").value = ""

    }
}




