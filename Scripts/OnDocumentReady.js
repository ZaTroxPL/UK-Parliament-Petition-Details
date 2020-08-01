$(document).ready(function() {
    debugger;

    $("#departments-div>span").click(function() {
        $("#departments-table").toggle();
    });

    $("#countries-div>span").click(function() {
        $("#countries-table").toggle();
    });

    var hour = new Date();
    if (hour.getHours() >= 20 || hour.getHours() <= 5) {
        var toggleSwitch = document.getElementById("darkMode").checked = true;
    }
    ToggleDarkMode();
})