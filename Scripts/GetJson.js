function GetPetitionDetails() {
    debugger;

    var petitionId = $("#petitionId")[0].value;
    petitionId = parseInt(petitionId);

    if (!petitionId) {
        alert("Please make sure your Petition Id only contains numbers")
    }

    var petitionURL = "https://petition.parliament.uk/petitions/" + petitionId + ".json";
    $.getJSON(petitionURL, function(data) { ProcessData(data) });
}

function ProcessData(data) {
    debugger;
    var link, title, background, moreDetails, signatureCount,
        topics, departments;

    link = data.links.self;
    title = data.data.attributes.action;
    background = data.data.attributes.background;
    moreDetails = data.data.attributes.additional_details;
    signatureCount = data.data.attributes.signature_count;
    topics = data.data.attributes.topics;
    departments = data.data.attributes.departments;

    $("#petition-title").text(title);
    $("#petition-description").text(background);
    $("#petition-details").text(moreDetails);
}