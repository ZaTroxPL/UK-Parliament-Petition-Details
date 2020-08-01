function ToggleDarkMode() {
    debugger;
    var toggleSwitch = document.getElementById("darkMode");
    var signatureCount = document.getElementById("signature-count");

    if (toggleSwitch.checked == true) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
        signatureCount.style.color = "#00cc00";
        $("#departments-div>span").css("border", "white 2px solid");
        $("#departments-table>thead>tr>th").css("border-bottom", "white 1px solid");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        signatureCount.style.color = "#008800";
        $("#departments-div>span").css("border", "black 2px solid");
        $("#departments-table>thead>tr>th").css("border-bottom", "black 1px solid");
    }
}