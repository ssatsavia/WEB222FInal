document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the display of hourly rate input based on user selection
    function toggleHourlyRateInput() {
        var hiringOption = document.getElementById("hiringOption");
        var hourlyRateInput = document.getElementById("hourlyRate");

        // If "Hiring" option is selected, show hourly rate input, otherwise hide it
        if (hiringOption.checked) {
            document.querySelector('.hourly-rate').style.display = "block";
        } else {
            document.querySelector('.hourly-rate').style.display = "none";
        }
    }

    // Add event listener to the radio buttons to trigger the function
    var radioButtons = document.getElementsByName("reason");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener("change", toggleHourlyRateInput);
    }

    // Initially call the function to set initial display of hourly rate input
    toggleHourlyRateInput();
});
