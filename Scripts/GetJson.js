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

    // Creating empty vars (I know this step is kind of unnecessery, but I never created vars like this, so wanted to try)
    var link, title, background, moreDetails, signatureCount, createdAt, updatedAt, status,
        topics, departments, countries, constituencies, regions;

    // Used for dates later on
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Populating the previously created empty vars
    link = data.links.self;
    title = data.data.attributes.action;
    background = data.data.attributes.background;
    moreDetails = data.data.attributes.additional_details;
    signatureCount = data.data.attributes.signature_count;
    createdAt = new Date(data.data.attributes.created_at);
    updatedAt = new Date(data.data.attributes.updated_at);
    status = data.data.attributes.state;
    topics = data.data.attributes.topics;
    departments = data.data.attributes.departments;
    countries = data.data.attributes.signatures_by_country;
    constituencies = data.data.attributes.signatures_by_constituency;
    regions = data.data.attributes.signatures_by_region;

    // Populating the page with information from the JSON response
    $("#petition-title").text(title);
    $("#petition-description").text(background);
    $("#petition-details").text(moreDetails);
    $("#signature-count").text(signatureCount);
    $("#created-on").text(days[createdAt.getDay()] + ", the " + createdAt.getOrdinalNumber() + " of " + months[createdAt.getMonth()] + " " + createdAt.getFullYear());
    $("#updated-on").text(days[updatedAt.getDay()] + ", the " + updatedAt.getOrdinalNumber() + " of " + months[updatedAt.getMonth()] + " " + updatedAt.getFullYear());
    $("#status-div>span").text(status);

    // Populate topics
    $("#topics-div>span>span").remove(); // reset the topics content
    for (var i = 0; i < topics.length; i++) {
        if (i === (topics.length - 1)) {
            $("#topics-div>span").append("<span> \"" + topics[i] + "\"</span>");
        } else {
            $("#topics-div>span").append("<span> \"" + topics[i] + "\",</span>");
        }

    }

    // Populate departments
    $("#departments-table>tbody").remove(); // reset the departments table content
    for (var i = 0; i < departments.length; i++) {
        var tableRow = "";
        if (i === 0) {
            tableRow += "<tbody>";
        }
        tableRow += "<tr>";
        tableRow += ("<td>" + departments[i].name + "</td>");
        tableRow += ("<td>" + departments[i].acronym + "</td>");
        tableRow += ("<td><a href=\"" + departments[i].url + "\">" + departments[i].url + "</a></td>");
        tableRow += "</tr>";
        if (i === (departments.length - 1)) {
            tableRow += "</tbody>";
        }
        $("#departments-table").append(tableRow);
    }

    // Populate countries
    $("#countries-table>tbody").remove(); // reset the countries table content
    for (var i = 0; i < countries.length; i++) {
        var tableRow = "";
        if (i === 0) {
            tableRow += "<tbody>";
        }
        tableRow += "<tr>";
        tableRow += ("<td>" + countries[i].name + "</td>");
        tableRow += ("<td>" + countries[i].code + "</td>");
        tableRow += ("<td class=\"signature-count\">" + countries[i].signature_count + "</td>");
        tableRow += "</tr>";
        if (i === (countries.length - 1)) {
            tableRow += "</tbody>";
        }
        $("#countries-table").append(tableRow);
    }

    // Populate constituencies
    $("#constituencies-table>tbody").remove(); // reset the constituencies table content
    for (var i = 0; i < constituencies.length; i++) {
        var tableRow = "";
        if (i === 0) {
            tableRow += "<tbody>";
        }
        tableRow += "<tr>";
        tableRow += ("<td>" + constituencies[i].name + "</td>");
        tableRow += ("<td>" + constituencies[i].mp + "</td>");
        tableRow += ("<td>" + constituencies[i].ons_code + "</td>");
        tableRow += ("<td class=\"signature-count\">" + constituencies[i].signature_count + "</td>");
        tableRow += "</tr>";
        if (i === (constituencies.length - 1)) {
            tableRow += "</tbody>";
        }
        $("#constituencies-table").append(tableRow);
    }

    // Populate regions
    $("#regions-table>tbody").remove(); // reset the regions table content
    for (var i = 0; i < regions.length; i++) {
        var tableRow = "";
        if (i === 0) {
            tableRow += "<tbody>";
        }
        tableRow += "<tr>";
        tableRow += ("<td>" + regions[i].name + "</td>");
        tableRow += ("<td>" + regions[i].ons_code + "</td>");
        tableRow += ("<td class=\"signature-count\">" + regions[i].signature_count + "</td>");
        tableRow += "</tr>";
        if (i === (regions.length - 1)) {
            tableRow += "</tbody>";
        }
        $("#regions-table").append(tableRow);
    }

    ToggleDarkMode(); // this is here to make sure that the signature numbers are of proper color
}

// Extend the capabilities of the Date object
Date.prototype.getOrdinalNumber = function() {
    debugger;

    var date = this.getDate();

    switch (date) {
        case 11:
            return date + "th";
        case 12:
            return date + "th";
        case 13:
            return date + "th";
    }

    var lastDigit = date % 10;

    switch (lastDigit) {
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