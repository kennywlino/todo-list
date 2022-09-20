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
    div.classList.add("add-todo-button-div");
    
    const button = document.createElement("button");
    button.classList.add("add-button");
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
    div.classList.add("todo-popup");
    
    // ToDo Form

    const todoForm = document.createElement("form");
    todoForm.classList.add("todo-form");

    const todoInput = document.createElement("input");
    todoInput.classList.add("todo-input");

    todoInput.setAttribute("type", "text");
    todoInput.setAttribute("name", "todo");
    todoInput.setAttribute("placeholder", "Add a ToDo Item");

    const detailsInput = document.createElement("input");
    detailsInput.classList.add("details-input");

    detailsInput.setAttribute("type", "text");
    detailsInput.setAttribute("name", "details");
    detailsInput.setAttribute("placeholder", "Details (optional)");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("due-date-input");

    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", "2022-09-20");

    todoForm.appendChild(todoInput);
    todoForm.appendChild(detailsInput);
    todoForm.appendChild(dueDateInput);

    div.appendChild(todoForm);

    // buttons to add or cancel adding a ToDo item

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");
    
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "Add ToDo";

    actionButtons.appendChild(cancelButton);
    actionButtons.appendChild(addButton);

    div.appendChild(actionButtons);
    
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