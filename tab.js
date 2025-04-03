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