const input = document.getElementById("input");
const taskList = document.getElementById("task_list");

function addTask(){
    if(input.value === '') {
        alert("Nothing written.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}


taskList.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("check");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();
