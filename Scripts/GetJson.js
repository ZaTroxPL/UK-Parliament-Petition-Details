function GetPetitionDetails() {
    debugger;

    var petitionId = $("#petitionId")[0].value;
    petitionId = parseInt(petitionId);

    if (!petitionId) {
        alert("Please make sure your Petition Id only contains numbers")
    }

    var petitionURL = "https://petition.parliament.uk/petitions/" + petitionId + ".json";
    $.getJSON(petitionURL, function(data) {ProcessData(data)});
}

function ProcessData(data) {
    debugger;
}
