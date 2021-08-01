function changeBackground(color) {
    document.body.style.background = color;
}
const results = JSON.parse(jsonResults)
window.addEventListener("load", function () {
    changeBackground(results.backgroundColor) 
});
