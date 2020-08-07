$(document).ready(function() {
    debugger;

    // Show/Hide departments table on click of the label
    $("#departments-div>div").click(function() {
        $("#departments-table").toggle();
    });

    // Show/Hide countries search input and table on click of the label
    $("#countries-div>div").click(function() {
        $("#countries-table").toggle();
        $("#countries-search").toggle();
    });

    // Show/Hide constituencies search input and table on click of the label
    $("#constituencies-div>div").click(function() {
        $("#constituencies-table").toggle();
        $("#constituencies-search").toggle();
    });

    // Show/Hide regions search input and table on click of the label
    $("#regions-div>div").click(function() {
        $("#regions-table").toggle();
        $("#regions-search").toggle();
    });

    // Filter countries table on keyup of the search input
    $("#countries-search").keyup(function() {
        FilterTable("countries-table", this);
    })

    // Filter constituencies table on keyup of the search input
    $("#constituencies-search").keyup(function() {
        FilterTable("constituencies-table", this);
    })

    // Filter regions table on keyup of the search input
    $("#regions-search").keyup(function() {
        FilterTable("regions-table", this);
    })

    // Force site into night mode if the hour is between 8PM and 6AM (5:59AM if you want to be exact)
    var hour = new Date();
    if (hour.getHours() >= 20 || hour.getHours() <= 5) {
        var toggleSwitch = document.getElementById("darkMode").checked = true;
    }

    ToggleDarkMode();
})