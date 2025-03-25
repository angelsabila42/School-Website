// scripts.js

let slideIndex = 0;
showSlides();

// Function to show slides automatically
function showSlides() {
    let slides = document.querySelectorAll(".carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to manually control next/prev
function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".carousel-slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
