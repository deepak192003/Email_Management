    document.addEventListener("DOMContentLoaded", function() {
        var composeBox = document.getElementById("compose-box");
        var scheduleBox = document.getElementById("schedule-meeting-box"); // Corrected ID
        var composeBtn = document.getElementById("compose-btn");
        var scheduleBtn = document.getElementById("schedule-btn");
        var hindenburgbox = document.getElementById("hindenburgbox");
        composeBtn.addEventListener("click", function() {
            if (scheduleBox.style.display === "block") {
                scheduleBox.style.display = "none"; // Hide the schedule box
            }
            if (composeBox.style.display === "none" || composeBox.style.display === "") {
                composeBox.style.display = "block"; // Show the compose box
            } else {
                composeBox.style.display = "none"; // Hide the compose box
            }
        });


        var hindenburgIcon = document.querySelector('.hindenburg-icon');

// Get the Hindenburg box
var hindenburgBox = document.getElementById('hindenburgBox');
var cross = document.getElementById('cross');
// Toggle the display of the Hindenburg box when the icon is clicked
hindenburgIcon.addEventListener('click', function() {
    // Toggle the display property
    if (hindenburgBox.style.display === 'none') {
        hindenburgBox.style.display = 'block';
    } else {
        hindenburgBox.style.display = 'none';
    }
});
       

        scheduleBtn.addEventListener("click", function() {
            if (composeBox.style.display === "block") {
                composeBox.style.display = "none"; // Hide the compose box
            }
            if (scheduleBox.style.display === "none" || scheduleBox.style.display === "") {
                scheduleBox.style.display = "block"; // Show the schedule box
            } else {
                scheduleBox.style.display = "none"; // Hide the schedule box
            }
        });

    });
