//HAMBURGER//
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    if (hamburger && navMenu) { // Ensure elements exist
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active"); // Show or hide menu
        });
    } else {
        console.error("Hamburger menu or navbar list not found.");
    }
});
