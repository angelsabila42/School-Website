
//scripts.js

//let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function(){
var acc = document.getElementsByClassName("accordion");
//var i;
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
for(var i = 0; i < acc.length; i++) {
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

//Function for the dynamic calendar

let clicked = null;
 let counter =0;
 let events = localStorage.getItem('events')? JSON.parse(localStorage.getItem('events')):[];

 const calender = document.getElementById("calender");
const monthDisplay = document.getElementById("month");
  let weekDays = ['Sunday','Monday','Tuesday','Wednesday',]
 const prevBtn = document.getElementById("prev");
 const nextBtn = document.getElementById("next");
 const deleteEventButton = document.getElementById("deleteBtn");
 const closeEventBtn = document.getElementById("closeBtn");

 let dates = document.getElementById("dates");
 
 
 
 const eventPop = document.getElementById("event");
 let eventInput = document.getElementById("eventInput");
 let saveEventBtn = document.getElementById("saveEvent");
 let cauncelEvent = document.getElementById("cauncelEvent");

 
 function openModal(date){
  clicked = date;
  const eventOfTheDay = events.find(e => e.date ===clicked);
  console.log(clicked)
  if (eventOfTheDay){
    deleteEventModal.style.display = "block";
  } else{
    eventPop.style.display = "block";
  }
 
 //closeModal();
}

function date(){
  
  let dt = new Date();
  if(counter !==0){
    dt.setMonth(new Date().getMonth() + counter);
  }
  let day = dt.getDate();
  let month = dt.getMonth();
  let year = dt.getFullYear();

  let firstDayOfMonth = new Date(year,month, 1);
  let firstDay = firstDayOfMonth.getDay()
  const daysInMonth = new Date(year, month+1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-US',
    {weekday:"long", month:"numeric", year: "numeric",day:"numeric"});

    monthDisplay.textContent = `${dt.toLocaleDateString
      ('en-US', {month: 'long'})} ${year}`;

     
     dates.innerHTML = '';
  console.log(daysInMonth);

  for(let i = 1; i <=firstDay+daysInMonth; i++){
    const daySquare = document.createElement("div");
   
 const dayString = `${month+1}/${i-firstDay}/${year}`;
  
 if(i<firstDay){
  daySquare.innerHTML = '';
 

   }

     else if(i>firstDay){
      daySquare.innerHTML = i - firstDay;
  
      const eventForTheDay = events.find(e => e.date===dayString);
      console.log(dateString)
   
       if(i - firstDay===0 && counter===0){
        daySquare.classList.add("today");
   }

    if(eventForTheDay && eventForTheDay.title){
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("eventDiv");
    daySquare.classList.add("eventDiv")
    eventDiv.innerHTML = (eventForTheDay.title);
    daySquare.appendChild(eventDiv);

    }

    daySquare.addEventListener('click', () =>  openModal(dayString));

  } 
  dates.appendChild(daySquare);
}
  }

  function closeModal(){
   deleteEventModal.style.display = 'none';
    eventPop.style.display = 'none';
   eventInput.value = "";
    clicked = null;
    }
    function saveEvent(){
      if(eventInput.value){
         events.push({
          date : clicked,
          title : eventInput.value,
         });
         localStorage.setItem('events', JSON.stringify(events));
     closeModal();
  
      }
    }

    function deleteEvent(){
      events = events.filter(e => e.date!==clicked);
      localStorage.setItem('events',JSON.stringify(events));
      closeModal();
      date();
    }
   


    saveEventBtn.addEventListener('click', saveEvent);
    cauncelEvent.addEventListener('click', closeModal);
    deleteEventButton.addEventListener('click', deleteEvent);
    closeEventBtn.addEventListener('click', closeModal);

    function openEventModal(){
      eventPop.style.display = "block";
    }
      nextBtn.onclick = function(){
        counter++
        date();
      }
      prevBtn.addEventListener('click', () =>{
          counter--
          date();
      });
    


    date();


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

//Testimonials
let count = 0;
let i = 0;
let testimonial = document.querySelectorAll(".sliden");


function show(count){
    testimonial.forEach(tes=>{
        tes.style.display = "none";
    })
  testimonial[count].style.display = "block"
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
    if(count>0){
        count--;
        show(count);
    }
    else if(count==0){
        count=3;

    }
    clearInterval(clear);
}
function nextslide(){
    if(count<3){
        count++;
        show(count);
    }
    else if(count==3){
        count=0;
    }
    clearInterval(clear)
}
let clear = setInterval(slider,4000);
  
  //Function for the dark mode
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const icon = document.getElementById('themeIcon');
    const rootElement = document.documentElement;

    // Initialize theme from localStorage (or system preference)
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply dark mode if enabled in localStorage or system preference (if no localStorage)
    if (savedTheme === 'enabled' || (!savedTheme && prefersDark)) {
        rootElement.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun'); // Show sun in dark mode


    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        const isDark = rootElement.classList.toggle('dark-mode');

        // Update icon and localStorage
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

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




//form submission java script
const sbt =document.getElementById("mysubmit");
sbt.addEventListener("click", ()=>{
    alert("Form has been submitted")
});



//Function for the animated timer
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});






