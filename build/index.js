//EXercise (Todo list )

const container = document.querySelector(".container");
const countTask = document.querySelector(".count-task");

document.addEventListener("DOMContentLoaded",function ( ){
    const addBtn = document.querySelector(".add"); // add new task  
    const ul = document.createElement("ul");
    ul.className = "list-container";
    container.insertBefore(ul,countTask)
    addBtn .addEventListener("click",addTask);
    ul.addEventListener("click",handleTask)
}); 

function addTask (event){
    event.preventDefault();      
    const ul = document.querySelector(".list-container")
    let input = document.querySelector(".input");
    const newTask = input.value.trim();
    if(!newTask){
        alert("Add Task!");
    }else {
        const li = document.createElement("li");
        li.innerHTML = `${input.value}<i class="fa-solid fa-circle-xmark"></i>`;
        ul.appendChild(li);
    }
    input.value = "";
}

function handleTask(event) {
    if(event.target.tagName === "I"){
        event.target.parentElement.remove();
    }
    if(event.target.tagName === "LI"){
        event.target.classList.toggle ("completed");
    }
}

function clearAllTasks (){
    console.log("clear");
}


