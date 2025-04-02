<<<<<<< Updated upstream
// scripts.js
=======
//scripts.js
>>>>>>> Stashed changes

//let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function(){
var acc = document.getElementsByClassName("accordion");
var i;
/*showSlides();

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
}*/

//Function to control the accordion
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
         //Adds or removes the active class depending on whether it is present
        this.classList.toggle("active");

        var icon = this.querySelector("i");
        if (this.classList.contains("active")){
            icon.classList.replace("fa-plus", "fa-minus")
        } else {
            icon.classList.replace("fa-minus","fa-plus");
        }

        //To control the hiding or display of the panel when clicked
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//Function for the dynamic table
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

function onAddContent(e) {
e.preventDefault();
const subject = document.getElementById('subject').value;
const teacher = document.getElementById('teacher').value;
tbody.innerHTML += `
<tr>
    <td>${subject}</td>
    <td>${teacher}</td>
    <td><button class="deleteBtn">Delete</button></td>
</tr>
`;
}

function onDeleteRow(e){
    if (!e.target.classList.contains('deleteBtn')){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}
  

form.addEventListener("submit",onAddContent);

table.addEventListener("click", onDeleteRow);
<<<<<<< Updated upstream
});




//Function for the animated timer
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});



 lightbox
=======

});
>>>>>>> Stashed changes


//Function for the animated timer
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});




 //lightbox
//GALLERY JS//
const relatedImages = {
    school: [
        'Images/sl1.PNG',
        'Images/picture2.jpg',
        'Images/s12.PNG',
        'Images/picture4.jpg',
        'Images/sl5.PNG',
        'Images/schoollifenew.jpg',
        'Images/sl6.PNG',
        'Images/picture1.jpg',
        'Images/chapel.jpg',
        'Images/slnew.jpg'
    ],
    cultural: [
        'Images/cd5.PNG',
        'Images/cd4.PNG',
        'Images/cd3.PNG',
        'Images/cd2.PNG',
        'Images/cd6.PNG',
        'Images/cd7.PNG',
        'Images/cd9.PNG'
    ],
    prom: [
        'Images/prom.PNG',
        'Images/prom1.PNG',
        'Images/prom2.PNG',
        'Images/prom3.PNG',
        'Images/prom4.PNG',
        'Images/prom5.PNG',
        'Images/prom6.PNG',
        'Images/prom7.PNG',
        'Images/prom8.PNG',
        'Images/prom10.PNG',
        'Images/prom11.PNG',
        'Images/prom12.PNG',
        'Images/prom13.PNG'
    ],
    clubs: [
        'Images/clubs1.PNG',
        'Images/clubs2.PNG',
        'Images/clubs3.PNG',
        'Images/clubs4.PNG',
        'Images/clubs5.PNG',
        'Images/clubs6.PNG'
    ],
    sports: [
        'Images/sportsday.jpg',
        'Images/swimming.jpeg',
        'Images/sports.jpg',
        'Images/lacrosse2.jpg',
        'Images/lacrosse.jpg',
        'Images/hockey2.webp',
        'Images/hockey.jpg'
    ]
};

let currentIndex = 0; 
let currentCategory = '';

function openLightbox(category) {
    currentCategory = category; // Set category
    currentIndex = 0; // Start with the first image

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const relatedContainer = document.getElementById("related-images");

    if (!relatedImages[currentCategory]) return; // Prevent errors if category is missing

    console.log("Lightbox opened with:", relatedImages[currentCategory]); 
    lightbox.style.display = "flex";
    lightboxImg.src = relatedImages[currentCategory][currentIndex]; 

    relatedContainer.innerHTML = "";
    relatedImages[currentCategory].forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => {
            currentIndex = index; // Update index when clicking related images
            lightboxImg.src = src;
        };
        relatedContainer.appendChild(img);
    });
}

function nextImage(event) {
    event.stopPropagation(); // Prevent lightbox from closing
    if (!relatedImages[currentCategory]) return; 
    currentIndex = (currentIndex + 1) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function prevImage(event) {
    event.stopPropagation(); // Prevent lightbox from closing
    if (!relatedImages[currentCategory]) return;
    currentIndex = (currentIndex - 1 + relatedImages[currentCategory].length) % relatedImages[currentCategory].length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = relatedImages[currentCategory][currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



//DARK MODE//

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const rootElement = document.documentElement; // Target the entire HTML document

    // Check localStorage and apply dark mode if enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        rootElement.classList.add('dark-mode');
        toggleButton.checked = true; // Update switch state
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('change', () => {
        rootElement.classList.toggle('dark-mode');

        // Save the state to localStorage
        if (rootElement.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});



//javasript code for testimanials
let counter = 0;
let i = 0;
let testimonial = document.querySelectorAll(".sliden");

function show(counter){
    testimonial.forEach(tes=>{
        tes.style.display = "none";
    })
  testimonial[counter].style.display = "block"
}

function slider(){
  if(i<3){
    i++;
    console.log(i);
      testimonial.forEach(tes=>{
          tes.style.display = "none";
      })
    testimonial[i].style.display = "block"
  }
  else if(i==3){
    i=0;
    console.log(i);
      testimonial.forEach(tes=>{
          tes.style.display = "none";
      })
    testimonial[i].style.display = "block"
  }
   
  }


function prevSlide(){
    if(counter>0){
        counter--;
        show(counter);
    }
    else if(counter==0){
        counter=3;
    }
    clearInterval(clear);
}
function nextslide(){
    if(counter<3){
        counter++;
        show(counter);
    }
    else if(counter==3){
        counter=0;
    }
    clearInterval(clear)
}
let clear = setInterval(slider,4000);



form.addEventListener("click", onDeleteRow);
 main

