function ToggleDarkMode() {
    debugger;
    var toggleSwitch = document.getElementById("darkMode");

    if (toggleSwitch.checked == true) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}