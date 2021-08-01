const results = JSON.parse(jsonResults)
console.log(results)
document.querySelector('#header').classList.remove("bg-primary")
document.querySelector('#header').style.background = results.headerColor
document.querySelector('.textHeader').style.color = results.fontColor
document.querySelector('#exitButton').style.color = results.fontColor