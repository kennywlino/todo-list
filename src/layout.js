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
    todoFormInput.setAttribute("id", 'todo-quick');

    // create a new div to wrap around the ToDo Form and buttons within the form
    // and moves the input into this div; 
    // this allows us to overlay the details/add button in CSS

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
    detailsButton.addEventListener("click", addDetailedTodo);

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.classList.add("add-button");
    addButton.textContent = "Add";

    buttonsDiv.append(detailsButton);
    buttonsDiv.append(addButton);

    inputAndButtonsDiv.appendChild(buttonsDiv);

    return todoForm;
}

// EL function used to open detailed ToDo menu 
// and carry over input from quick ToDo if existing
function addDetailedTodo() {
    const todoPopUp = document.querySelector(".todo-popup");
    
    let quickTodoInput = document.getElementById("todo-quick");
    let detailedTodoInput = document.getElementById("todo-detailed");
    if (quickTodoInput.value != '') {
        detailedTodoInput.value = quickTodoInput.value;
        quickTodoInput.value = '';
    }

    todoPopUp.classList.add("active");
}

// defines extended form to take in user input for ToDo items
// including details and due date
function createDetailedTodoForm() {
    const div = document.createElement("div");
    div.classList.add("todo-popup");
    
    // ToDo Form

    const todoForm = createBasicTodoForm();
    todoForm.classList.add("detailed");

    const todoFormInput = todoForm.querySelector(".todo-input");
    todoFormInput.setAttribute("id", 'todo-detailed');

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
    cancelButton.addEventListener("click", closeDetailedTodo);

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "Add ToDo";

    actionButtons.appendChild(cancelButton);
    actionButtons.appendChild(addButton);

    div.appendChild(actionButtons);
    
    return div;
}

// EL function used to close the detailed ToDo menu
function closeDetailedTodo() {
    const todoPopUp = document.querySelector(".todo-popup");

    const detailedTodoForm = document.querySelector(".todo-form.detailed");
    let todoInput = detailedTodoForm.querySelector(".todo-input");
    let detailsInput = detailedTodoForm.querySelector(".details-input");
    todoInput.value = '';
    detailsInput.value = '';

    todoPopUp.classList.remove("active");
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
    content.appendChild(createDetailedTodoForm());
    content.appendChild(createFooter());
}

export default setUpPage;