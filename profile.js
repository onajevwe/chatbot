document.addEventListener("DOMContentLoaded", function () {
    // Retrieve first name from localStorage
    var firstName = localStorage.getItem('firstName');

    // Display personalized welcome message
    var welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.textContent = "Welcome, " + firstName + "!";
    }
    
    // Additional actions you may want to perform on profile load
    // ...
});
