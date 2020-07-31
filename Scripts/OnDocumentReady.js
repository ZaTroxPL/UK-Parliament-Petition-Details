$(document).ready(function() {
    debugger;

    var hour = new Date();
    if (hour.getHours() >= 20 || hour.getHours() <= 5) {
        var toggleSwitch = document.getElementById("darkMode").checked = true;
    }
    ToggleDarkMode();

    $("#departments-div>span").click(function() {
        $("#departments-table").toggle();
    });
})