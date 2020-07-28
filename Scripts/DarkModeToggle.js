$(document).ready(function() {
    debugger;
    ToggleDarkMode();
})

function ToggleDarkMode() {
    debugger;
    var toggleSwitch = document.getElementById("darkMode");
    var signatureCount = document.getElementById("signature-count");

    if (toggleSwitch.checked == true) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
        signatureCount.style.color = "#00cc00";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        signatureCount.style.color = "#008800";
    }
}