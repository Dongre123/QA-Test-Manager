function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("login-message");

    if (username === "admin" && password === "admin123") {

        document.getElementById("login-section").style.display = "none";

        document.getElementById("dashboard-section").style.display = "block";

        message.textContent = "";

    } else {

        message.textContent = "Invalid username or password";

        message.className = "error";
    }
}


function addTask() {

    const taskInput = document.getElementById("task-input");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);

    taskInput.value = "";
}


function completeTask(button) {

    const taskText = button.parentElement.querySelector("span");

    taskText.style.textDecoration = "line-through";

    taskText.style.color = "green";

    button.textContent = "Completed";

    button.disabled = true;
}


function deleteTask(button) {

    button.parentElement.remove();

}