document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("main-content");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    // Password to access the website
    const correctPassword = "gym";

    // Show the overlay
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;

    // Handle login button click
    loginButton.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // Correct password, hide the overlay
            overlay.style.visibility = "hidden";
            overlay.style.opacity = 0;
        } else {
            // Incorrect password, display a message
            alert("Incorrect password. Please try again.");
            passwordInput.value = "";
        }
    });
});


