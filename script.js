const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveTasks();

}

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }

});

function saveTasks(){
    localStorage.setItem("tasks", todoList.innerHTML);
}

function getTasks(){
    todoList.innerHTML = localStorage.getItem("tasks");
}
getTasks();