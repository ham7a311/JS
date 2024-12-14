const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

function addTask() {
    const task = input.value.trim();
    const li = document.createElement("li");
    if (task === "") {
        return;
    }

    li.className = `flex justify-between items-center bg-slate-700 rounded p-2 my-2`;

    li.innerHTML = `
    <div class="flex items-center">
        <input type="checkbox" class="mr-2" onchange="toggleComplete(this)">
        <span class="task-text">${task}</span>
    </div>
    <button onclick="removeTask(this)" class="bg-red-600 hover:bg-red-500 text-white rounded px-3 py-1">
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
