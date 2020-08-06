$(document).ready(function() {
    debugger;

    $("#departments-div>div").click(function() {
        $("#departments-table").toggle();
    });

    $("#countries-div>div").click(function() {
        $("#countries-table").toggle();
        $("#countries-search").toggle();
    });

    $("#constituencies-div>div").click(function() {
        $("#constituencies-table").toggle();
        $("#constituencies-search").toggle();
    });

    $("#regions-div>div").click(function() {
        $("#regions-table").toggle();
        $("#regions-search").toggle();
    });

    $("#countries-search").keyup(function() {
        FilterTable("countries-table", this);
    })

    $("#constituencies-search").keyup(function() {
        FilterTable("constituencies-table", this);
    })

    $("#regions-search").keyup(function() {
        FilterTable("regions-table", this);
    })

    var hour = new Date();
    if (hour.getHours() >= 20 || hour.getHours() <= 5) {
        var toggleSwitch = document.getElementById("darkMode").checked = true;
    }

    ToggleDarkMode();
})