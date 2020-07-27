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
    var link, title, background, moreDetails, signatureCount, createdAt, updatedAt,
        topics, departments;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    link = data.links.self;
    title = data.data.attributes.action;
    background = data.data.attributes.background;
    moreDetails = data.data.attributes.additional_details;
    signatureCount = data.data.attributes.signature_count;
    createdAt = new Date(data.data.attributes.created_at);
    updatedAt = new Date(data.data.attributes.updated_at);
    topics = data.data.attributes.topics;
    departments = data.data.attributes.departments;

    $("#petition-title").text(title);
    $("#petition-description").text(background);
    $("#petition-details").text(moreDetails);
    $("#signature-count").text(signatureCount);
    $("#created-on").text(days[createdAt.getDay()] + ", the " + createdAt.getOrdinalNumber() + " of " + months[createdAt.getMonth()] + " " + createdAt.getFullYear());
    $("#updated-on").text(days[updatedAt.getDay()] + ", the " + updatedAt.getOrdinalNumber() + " of " + months[updatedAt.getMonth()] + " " + updatedAt.getFullYear());
}

Date.prototype.getOrdinalNumber = function() {
    debugger;
    var date = this.getDate();
    switch (date) {
        case 1:
            return date + "st";
        case 2:
            return date + "nd";
        case 3:
            return date + "rd";
        default:
            return date + "th";
    }

}