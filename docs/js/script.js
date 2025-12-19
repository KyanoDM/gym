
document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    const age = document.querySelector("#age");
    if (age) {
        const birthDate = new Date(2005, 4, 22); // Months are 0-indexed: 4 = May
        const today = new Date();
        let ageValue = today.getFullYear() - birthDate.getFullYear();
        const hasHadBirthday =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
        if (!hasHadBirthday) {
            ageValue--;
        }
        age.innerHTML = ageValue;
    }

    // Figma card modal functionality
    const figmaCard = document.querySelector("#figmaCard");
    if (figmaCard) {
        figmaCard.addEventListener('click', function () {
            const figmaModal = new bootstrap.Modal(document.getElementById('figmaModal'));
            figmaModal.show();
        });
    }
}
