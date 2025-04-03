// Access the testimonials
let testSlide = document.querySelectorAll('.testimonial-content');
// Access the indicators
let dots = document.querySelectorAll('.dot');

let count = 0;

// Add click event to the indicators
function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');
    if(testId > count){
        testSlide[count].style.animation = 'next1 0.5s ease-in forwards';
        count = testId;
        testSlide[count].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == count){return;}
    else{
        testSlide[count].style.animation = 'prev1 0.5s ease-in forwards';
        count = testId;
        testSlide[count].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[count].className += ' active';
}

// Code for auto sliding
function slideNext(){
    testSlide[count].style.animation = 'next1 0.5s ease-in forwards';
    if(count >= testSlide.length - 1){
        count = 0;
    }
    else{
        count++;
    }
    testSlide[count].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}
function autoSliding(){
    deleteInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over the indicators
const container = document.querySelector('.indicators');
container.addEventListener('mouseover', pause);
function pause(){
    clearInterval(deleteInterval);
}

// Resume sliding when mouse is out of the indicators
container.addEventListener('mouseout', autoSliding);
