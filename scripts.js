
//scripts.js


document.addEventListener("DOMContentLoaded", function(){
var acc = document.getElementsByClassName("accordion");

//Function to control the accordion
for(var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
         //Adds or removes the active class depending on whether it is present
        this.classList.toggle("acctive");

        var icon = this.querySelector("i");
        if (this.classList.contains("acctive")){
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


//HAMBURGER
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

  //Function for the dark mode
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
    }







//form submission java script
const sbt =document.getElementById("mysubmit");
sbt.addEventListener("click", ()=>{
    alert("Form has been submitted")
});

//form validation
const username = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("formx");
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) =>{
    let messages=[];
    if(username.value===''||username.value==null){
        messages.push('Name is required')
    }
    if(email.value.length > 20){
        messages.push('Your email should not exeed 25 characters')
    }
    if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
}
});










