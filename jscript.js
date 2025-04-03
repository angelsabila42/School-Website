//Function for the dynamic table
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('ac-form');
    const tbody = document.querySelector('.ac-table tbody');
    const table = document.querySelector('.ac-table');
    
    function onAddContent(e) {
    e.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const teacher = document.getElementById('teacher').value;
    const newRow = document.createElement("tr");
    
    newRow.innerHTML = `
    <tr>
        <td>${subject}</td>
        <td>${teacher}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;
    
    tbody.appendChild(newRow);
    form.reset();
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