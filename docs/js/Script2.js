document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const showPopupButton = document.getElementById("showPopup");
    const passwordPopup = document.getElementById("passwordPopup");
    const closePopupButton = document.getElementById("closePopup");
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitButton");
    let k = 1;
    // Create an array of hidden button IDs
    const hiddenButtonIds = ["hidden1", "hidden2"];

    if (k = 1) {
        k++;
        hiddenButtonIds.forEach(id => {
            const hiddenButton = document.getElementById(id);
            if (hiddenButton) {
                hiddenButton.style.display = "none";
            }
        });
    }
    // Event listener for the "Invullen?" button
    showPopupButton.addEventListener("click", function () {
        passwordPopup.style.display = "block";
    });

    // Event listener for the close button in the popup
    closePopupButton.addEventListener("click", function () {
        passwordPopup.style.display = "none";
    });

    // Event listener for the submit button in the popup
    submitButton.addEventListener("click", function () {
        const password = passwordInput.value;
        if (password === "test") {
            passwordPopup.style.display = "none";
            // Show hidden buttons
            hiddenButtonIds.forEach(id => {
                const hiddenButton = document.getElementById(id);
                if (hiddenButton) {
                    hiddenButton.style.display = "block";
                }
            });
        } else {
            alert("Incorrect password. Try again.");
        }
    });
});
