import ToDo from "./todo";
import Project from "./project";
import './style.css';

// defines header to display page title
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const pageName = document.createElement("h1");
    pageName.textContent = "ToDo List";

    header.appendChild(pageName);
    
    header.appendChild(createAddTodoButton());

    return header;
}

// defines an "Add ToDo" button to include within the header
// opens a pop-up window for user to add new ToDo on-click
function createAddTodoButton() {
    const div = document.createElement("div");
    div.classList.add("add-todo-div");
    
    const button = document.createElement("button");
    button.classList.add("add-todo");
    button.textContent = "+";

    // pop-up menu on-click
    button.addEventListener("click", addTodo);

    div.appendChild(button);
    
    return div;
}

function addTodo() {
    alert("adding todo");
}

// defines form to take in user input for ToDo items
function createTodoForm() {
    const div = document.createElement("div");
    
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "todo");
    input.setAttribute("placeholder", "Add a ToDo Item");

    form.appendChild(input);

    div.append(form);

    return div;
}

// sets up the entire webpage with default view
// e.g. sidebar closed and only today's TODOs displayed
function setUpPage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createTodoForm());
}

export default setUpPage;