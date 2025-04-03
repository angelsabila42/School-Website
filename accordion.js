document.addEventListener("DOMContentLoaded", function(){
    var acc = document.getElementsByClassName("accordion");
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

});