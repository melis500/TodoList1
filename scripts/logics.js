let data = []

const createTodoItem = (newTask, deadline) => {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("img");
    deleteBtn.id = "deleteBtn";
    deleteBtn.src = "./images/delete.png";
    deleteBtn.addEventListener("click", onDelete);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", onDone);
    let txt = document.createTextNode(` ${newTask} ${deadline}`);
    let label = document.createElement("label");
    label.className = "task";
    label.append(txt);
    li.append(label);
    li.append(checkbox);
    li.append(deleteBtn);
    list.append(li);
};

function renderTodos() {
    data.map((todoItem) => {
        createTodoItem(todoItem);
    })
}

let counter = 0;


function onAdd() {
    let newTask = textIn.value;
    if (newTask !== "") {
        textIn.value = "";
        data.push({
            id: counter++,
            task: newTask,
            deadline: dateInput.value
        })
        renderTodos();
    }
}

function onDelete(e) {
    e.target.parentElement.remove();
}

function onDone(e) {
    if (e.target.checked) {
        e.target.parentElement.classList.add("done");
    } else {
        e.target.parentElement.classList.remove("done");
    }
}

// set a function
addBtn.addEventListener("click", onAdd);