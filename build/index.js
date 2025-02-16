//EXercise (Todo list )

const container = document.querySelector(".container");
const countTask = document.querySelector(".count-task");

document.addEventListener("DOMContentLoaded",function ( ){
    const addBtn = document.querySelector(".add"); // add new task  
    const ul = document.createElement("ul");
    ul.className = "list-container";
    container.insertBefore(ul,countTask)
    addBtn .addEventListener("click",addTask);
}); 

function addTask (event){
        event.preventDefault();       
    const input = document.querySelector("input")
    const li = document.createElement("li");
    console.dir(input,li)
}




