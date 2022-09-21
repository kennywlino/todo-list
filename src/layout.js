import ToDo from "./todo";
import Project from "./project";
import './style.css';

// defines header to display page title
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    // holds dropdown button and title headline
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-div");

    const dropDownButton = document.createElement("button");
    dropDownButton.classList.add("dropdown");
    dropDownButton.setAttribute("type", "button");
    dropDownButton.textContent = "#";

    // title headline
    const pageName = document.createElement("h1");
    pageName.textContent = "ToDo List";

    leftDiv.appendChild(dropDownButton);
    leftDiv.appendChild(pageName);

    header.appendChild(leftDiv);
    
    // quick ToDo bar
    const quickTodoDiv = document.createElement("div");
    quickTodoDiv.classList.add("quick-todo-div");

    const quickTodoForm = createQuickTodoForm();
    
    quickTodoDiv.appendChild(quickTodoForm);
    
    header.appendChild(quickTodoDiv);

    // new ToDo button
    //header.appendChild(createAddTodoButton());

    return header;
}

// defines an "Add ToDo" button to include within the header
// opens a pop-up window for user to add new ToDo on-click
function createAddTodoButton() {
    const div = document.createElement("div");
    div.classList.add("add-todo-button-div");
    
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("add-button");
    button.textContent = "+";

    // pop-up menu on-click
    button.addEventListener("click", addTodo);

    div.appendChild(button);
    
    return div;
}

function addTodo() {
    const todoPopUp = document.querySelector(".todo-popup");
    todoPopUp.classList.add("active");
}


// creates the basic ToDo form to use both standalone in the header
// and in the extended ToDo form containing details and due date
function createBasicTodoForm() {
    const todoForm = document.createElement("form");
    todoForm.classList.add("todo-form");

    const todoInput = document.createElement("input");
    todoInput.classList.add("todo-input");

    todoInput.setAttribute("type", "text");
    todoInput.setAttribute("name", "todo");
    todoInput.setAttribute("placeholder", "Add a ToDo Item");
    
    todoForm.appendChild(todoInput);

    return todoForm;
}

// creates the quick ToDo form used in the header to take in
// a new ToDo *without* details and due date
function createQuickTodoForm() {
    const todoForm = createBasicTodoForm();
    todoForm.classList.add("quick");
    
    const todoFormInput = todoForm.querySelector(".todo-input");

    // create a new div to wrap around the ToDo Form and buttons within the form
    // and moves the input into this div

    const inputAndButtonsDiv = document.createElement("div");
    inputAndButtonsDiv.classList.add("input-and-buttons-div");

    todoFormInput.parentNode.insertBefore(inputAndButtonsDiv, todoFormInput);

    inputAndButtonsDiv.appendChild(todoFormInput);

    // buttons for details (extended ToDo) and adding ToDo

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");

    const detailsButton = document.createElement("button");
    detailsButton.setAttribute("type", "button");
    detailsButton.classList.add("details-button");
    detailsButton.textContent = "Details";

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.classList.add("add-button");
    addButton.textContent = "Add";

    buttonsDiv.append(detailsButton);
    buttonsDiv.append(addButton);

    inputAndButtonsDiv.appendChild(buttonsDiv);

    return todoForm;
}
    
// defines extended form to take in user input for ToDo items
// including details and due date
function createExtendedTodoForm() {
    const div = document.createElement("div");
    div.classList.add("todo-popup");
    
    // ToDo Form

    const todoForm = createBasicTodoForm();

    // extended ToDo form details
    const detailsInput = document.createElement("input");
    detailsInput.classList.add("details-input");

    detailsInput.setAttribute("type", "text");
    detailsInput.setAttribute("name", "details");
    detailsInput.setAttribute("placeholder", "Details");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("due-date-input");

    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", "2022-09-20");

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

// defines the sidebar containing links to "Today", 
// list of projects, etc.
function createSidebar() {
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");

    return sidebarDiv;
}

function createFooter() {
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");

    return footerDiv;
}

// sets up the entire webpage with default view
// e.g. sidebar closed and only today's TODOs displayed
function setUpPage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createSidebar());
    content.appendChild(createExtendedTodoForm());
    content.appendChild(createFooter());
}

export default setUpPage;