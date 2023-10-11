// JavaScript to handle button click and redirection
document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    // Convert mechanic and station values to uppercase and replace spaces with underscores
    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    // Define the base URL for the selected mechanic
    var baseRedirectURL = "https://web.miniextensions.com/Bwk6PtCv1a4zbRONadUU?prefill_Mechanic=" + selectedMechanic;

    // Define redirection URLs for different stations
    var redirectionURLs = {
        "D0": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "D1": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "D2": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "D3": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "D4": baseRedirectURL + "&prefill_Station=" + selectedStation
    };

    // Check if the selected station exists in the redirection URLs
    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Please select both a mechanic and a station before clicking Go.");
    }
});
