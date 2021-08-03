// DataTables Configuration and translation 
$(document).ready(function () {
    $('#subscribers').DataTable({
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Todos"]],
        "pageLength": 50,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json'
        }
    });
});
// creates the image modal
$("#pop").on("click", function () {
    $('#imageModal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

// creates the clickable url
//const jsonResults = '<%- JSON.stringify(userData) %>';
//const results = JSON.parse(jsonResults)
const link = location.protocol + '//' + location.host + location.pathname;
eventId = document.getElementById("eventId").value
document.getElementById("eventUrl").innerHTML = link.replace('/event', '') + "/live?event=" + eventId;

function sendPost(url, data){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(data))
    // request.onload = function(){
    //     console.log(this.responseText)
    // }
    return request.responseText
}


function ColorChange() {
    event.preventDefault()
    const url = '/event/formColorChange'
    const headerColor = document.querySelector("#headerColor").value
    const footerColor = document.querySelector("#footerColor").value
    const fontColor = document.querySelector("#fontColor").value
    const backgroundColor = document.querySelector("#backgroundColor").value
    const eventId = document.querySelector("#eventId").value
    const Data = {
        "headerColor": headerColor,
        "footerColor": footerColor,
        "fontColor": fontColor,
        "backgroundColor": backgroundColor,
        "eventId": eventId
    }
    sendPost(url, Data)
}

function optionsChange(){
    const url = '/event/formOptionsChange'
    const activeChat = (document.querySelector("#activeChat").checked ? 1 : 0)
    const activePoll = (document.querySelector("#activePoll").checked ? 1 : 0)
    const privateWebinar = (document.querySelector("#privateWebinar").checked ? 1 : 0)
    const activeEvent = (document.querySelector("#activeEvent").checked ? 1 : 0)
    const eventId = document.querySelector("#eventId").value
    const Data = {
        "activeChat": activeChat,
        "activePoll": activePoll,
        "privateWebinar": privateWebinar,
        "activeEvent": activeEvent,
        "eventId": eventId
    }
    sendPost(url, Data)
}


