function addTask() {
    var taskText = document.getElementById("task").value;
    if (taskText.trim() === "") {
        return;
    }
    
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-button">Remover</button>
    `;
    taskList.appendChild(taskItem);
    document.getElementById("task").value = "";

    var removeButtons = document.querySelectorAll(".remove-button");
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function() {
            taskList.removeChild(this.parentNode);
        });
    }
}

document.getElementById("add-button").addEventListener("click", addTask);
