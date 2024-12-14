const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

function addTask() {
    const task = input.value.trim();
    const li = document.createElement("li");
    if (task === "") {
        return;
    }

    li.className = `task`;

    li.innerHTML = `
    <div class="flex items-center">
        <input type="checkbox" class="checkbox" onchange="toggleComplete(this)">
        <span class="task-text">${task}</span>
    </div>
    <button onclick="removeTask(this)" class="remove">
        <i class="fas fa-trash-alt"></i>
    </button>
`;
    
    list.appendChild(li);
    input.value = "";
}


function toggleComplete(checkbox) {
    const task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.classList.add("line-through");
    } else {
        task.classList.remove("line-through");
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
