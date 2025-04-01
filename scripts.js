

/*let slideIndex = 0;
showSlides();
//Function to show slides automatically
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