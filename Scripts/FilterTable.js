function FilterTable(tableId, input) {
    debugger;

    var filterText = input.value.toLowerCase();
    $("#" + tableId + ">tbody>tr").each(function(index) {
        var name = $(this)[0].cells[0].textContent.toLowerCase();
        if (name.indexOf(filterText) != -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
}