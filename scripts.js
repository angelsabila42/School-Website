// scripts.js

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

});



//Function for the animated timer
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
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


