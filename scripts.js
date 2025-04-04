
//scripts.js

//let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function(){
var acc = document.getElementsByClassName("accordion");


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

  





//form submission java script
const sbt =document.getElementById("mysubmit");
sbt.addEventListener("click", ()=>{
    alert("Form has been submitted")
});


});








