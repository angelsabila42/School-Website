let counter = 0;

let feesbtn = document.getElementById("feesbtn");
let usTodaybtn = document.getElementById("usToday");
let managementbtn = document.getElementById("managementbtn");
let locationbtn= document.getElementById("locationbtn");
let joinUSbtn= document.getElementById("joinUsbtn");

let currentlypar = document.getElementById("currently");
let managementpar = document.getElementById("management");
let locationpar = document.getElementById("direction");
let joinUSpar = document.getElementById("joinUs");
let feespar = document.getElementById("fees");
let testimonialpar = document.getElementById("testimonials");

// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('tab.js loaded and DOM fully loaded');
    
    let currentTestimonialIndex = 0;
    const testimonialSlides = document.querySelectorAll('.sliden');
    const backButton = document.querySelector('.back');
    const forwardButton = document.querySelector('.forward');

    console.log('Testimonial Slides:', testimonialSlides);
    console.log('Back Button:', backButton);
    console.log('Forward Button:', forwardButton);

    // Make these functions global so they can be called from HTML onclick
    window.showTestimonial = function(index) {
        console.log('Showing testimonial at index:', index);
        
        // Hide all testimonial slides
        testimonialSlides.forEach((slide, idx) => {
            slide.style.display = 'none';
            console.log(`Slide ${idx} hidden`);
        });

        // Show the current slide
        if (testimonialSlides[index]) {
            testimonialSlides[index].style.display = 'flex';
            console.log(`Slide ${index} displayed`);
        } else {
            console.error('Invalid slide index:', index);
        }
    }

    window.nextSlide = function() {
        console.log('Next slide called');
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonialSlides.length) {
            currentTestimonialIndex = 0;
        }
        showTestimonial(currentTestimonialIndex);
    }

    window.prevSlide = function() {
        console.log('Previous slide called');
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonialSlides.length - 1;
        }
        showTestimonial(currentTestimonialIndex);
    }

    // Initial display
    showTestimonial(currentTestimonialIndex);

    // Add event listeners to navigation buttons if they exist
    if (backButton) {
        backButton.addEventListener('click', prevSlide);
        console.log('Back button event listener added');
    } else {
        console.error('Back button not found');
    }

    if (forwardButton) {
        forwardButton.addEventListener('click', nextSlide);
        console.log('Forward button event listener added');
    } else {
        console.error('Forward button not found');
    }
});

// Optional: Auto-slide functionality
function autoSlide() {
    nextSlide();
}

// Uncomment the line below to enable auto-sliding every 5 seconds
// setInterval(autoSlide, 5000);

// Testimonial section toggle (if needed)
if (testimonialpar) {
    testimonialpar.onclick = function() {
        // Add any specific actions for testimonial section
        console.log('Testimonial section clicked');
    }
}

const pars = document.querySelectorAll(".pars");
console.log(pars);

function show(counter){
    pars.forEach(par => {
  par.style.display = "none";
    })
    pars[counter].style.display = "block";
}
usTodaybtn.onclick = function(){
    counter = 0;
     show(counter);
   
}

managementbtn.onclick = function(){
    counter = 1;
     show(counter);
   
}
locationbtn.onclick = function(){
    counter = 2;
     show(counter);
   
}
joinUSbtn.onclick = function(){
    counter = 3;
     show(counter);
   
}
feesbtn.onclick = function(){
    counter = 4;
     show(counter);
   
}