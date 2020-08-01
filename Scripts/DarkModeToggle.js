function ToggleDarkMode() {
    debugger;
    var toggleSwitch = document.getElementById("darkMode");

    if (toggleSwitch.checked == true) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
        $(".signature-count").css("color", "#00cc00");
        $(".table-button").css("border", "white 2px solid");
        $(".custom-table>thead>tr>th").css("border-bottom", "white 1px solid");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        $(".signature-count").css("color", "#008800");
        $(".table-button").css("border", "black 2px solid");
        $(".custom-table>thead>tr>th").css("border-bottom", "black 1px solid");
    }
}