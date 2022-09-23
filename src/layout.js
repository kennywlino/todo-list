import ToDo from "./todo";
import Project from "./project";
import ProjectCollection from "./projectCollection";
import './style.css';

const projectCollection = new ProjectCollection();
let allProjects = projectCollection.loadFromLocalStorage();
console.log(allProjects);
allProjects[0].addTodo("wash");
allProjects[0].addTodo("gym");
console.log(allProjects[0]);

// defined so we don't include them in the "Projects" section AND "Home" section
const specialHomeProjects = ["Inbox", "Today", "Next 7 Days"];

// defines header to display page title
function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    // holds dropdown button and title headline
    const leftDiv = document.createElement("div");
    leftDiv.setAttribute("id", "left-div");

    const dropDownButton = document.createElement("button");
    dropDownButton.setAttribute("id" , "dropdown");
    dropDownButton.setAttribute("type", "button");
    dropDownButton.textContent = "#";
    dropDownButton.addEventListener("click", openDropDown);

    // title headline
    const pageName = document.createElement("h1");
    pageName.textContent = "ToDo List";

    leftDiv.appendChild(dropDownButton);
    leftDiv.appendChild(pageName);

    header.appendChild(leftDiv);
    
    // quick ToDo bar
    const quickTodoDiv = document.createElement("div");
    quickTodoDiv.setAttribute("id", "quick-todo-div");

    const quickTodoForm = createQuickTodoForm();
    
    quickTodoDiv.appendChild(quickTodoForm);
    
    header.appendChild(quickTodoDiv);

    return header;
}

// EL function used to toggle (open/close) the dropdown menu
function openDropDown() {
    const sidebarDiv = document.getElementById("sidebar");
    sidebarDiv.classList.toggle("active");

    const bodyDiv = document.getElementById("body");
    bodyDiv.classList.toggle("smaller");
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
    detailsButton.setAttribute("id", "details-button");
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
    const todoPopUp = document.getElementById("todo-popup");
    
    let quickTodoInput = document.getElementById("todo-quick");
    let detailedTodoInput = document.getElementById("todo-detailed");
    if (quickTodoInput.value != '') {
        detailedTodoInput.value = quickTodoInput.value;
        quickTodoInput.value = '';
    }

    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    todoPopUp.classList.add("active");
}

// defines extended form to take in user input for ToDo items
// including details and due date
function createDetailedTodoForm() {
    const div = document.createElement("div");
    div.setAttribute("id", "todo-popup");
    
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
    const todoPopUp = document.getElementById("todo-popup");

    const detailedTodoForm = document.querySelector(".todo-form.detailed");
    let todoInput = detailedTodoForm.querySelector(".todo-input");
    let detailsInput = detailedTodoForm.querySelector(".details-input");
    todoInput.value = '';
    detailsInput.value = '';

    const overlay = document.getElementById("overlay");

    overlay.classList.remove("active");
    todoPopUp.classList.remove("active");
}

// defines the sidebar containing links to "Today", 
// list of projects, etc.
function createSidebar() {
    const sidebarDiv = document.createElement("div");
    sidebarDiv.setAttribute("id", "sidebar");

    const [homeDiv, projectsDiv] = loadSidebarContent();

    sidebarDiv.appendChild(homeDiv);
    sidebarDiv.appendChild(projectsDiv);

    return sidebarDiv;
}

function loadSidebarContent() {
    // Home section of sidebar
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "sidebar-home");
    const homeHeader = document.createElement("h2");
    homeHeader.textContent = "Home";

    const inboxDiv = document.createElement("div");
    inboxDiv.setAttribute("id", "sidebar-inbox");
    inboxDiv.textContent = "Inbox";

    const todayTodosDiv = document.createElement("div");
    todayTodosDiv.setAttribute("id", "sidebar-today");
    todayTodosDiv.textContent = "Today";

    const nextSevenDaysDiv = document.createElement("div");
    nextSevenDaysDiv.setAttribute("id", "sidebar-next-seven");
    nextSevenDaysDiv.textContent = "Next 7 Days";

    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(inboxDiv);
    homeDiv.appendChild(todayTodosDiv);
    homeDiv.appendChild(nextSevenDaysDiv);

    // projects section of sidebar
    const projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("id", "sidebar-projects");
    const projectsHeader = document.createElement("h2");
    projectsHeader.textContent = "Projects";

    // new project button
    const newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("type", "button");
    newProjectButton.setAttribute("id", "new-project-button");
    newProjectButton.textContent = "New Project";
    newProjectButton.addEventListener("click", showNewProjectForm);

    // div to hold all projects inside ProjectCollection

    const allProjectsDiv = document.createElement("div");
    allProjectsDiv.setAttribute("id", "sidebar-all-projects");
    
    projectsDiv.appendChild(projectsHeader);
    projectsDiv.appendChild(newProjectButton);
    projectsDiv.appendChild(createNewProjectForm());
    projectsDiv.appendChild(allProjectsDiv);

    return [homeDiv, projectsDiv];
}

// EL function to show the new project form when the "New Project" button
// inside the sidebar is clicked
function showNewProjectForm() {
    const projectForm = document.querySelector(".project-form");
    projectForm.classList.add("active");
}

// function used to hide new project form after new project has been added
function hideNewProjectForm() {
    const projectForm = document.querySelector(".project-form");
    projectForm.classList.remove("active");
}

// defines form for adding new projects
function createNewProjectForm() {
    const projectForm = document.createElement("form");
    projectForm.classList.add("project-form");

    const inputAndButtonsDiv = document.createElement("div");
    inputAndButtonsDiv.classList.add("input-and-buttons-div");
    
    const projectInput = document.createElement("input");
    projectInput.classList.add("project-input");

    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("name", "todo");
    projectInput.setAttribute("placeholder", "Project Name");
    
    inputAndButtonsDiv.appendChild(projectInput);

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.classList.add("add-button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", addNewProject);

    inputAndButtonsDiv.appendChild(addButton);

    projectForm.appendChild(inputAndButtonsDiv);

    return projectForm;

}

// EL function for adding new project
function addNewProject(name) {
    const projectName = document.querySelector(".project-input").value;
    const project = new Project(projectName);
    projectCollection.addNewProject(project);
    displayProjects();
    hideNewProjectForm();
}

// displays and sets up the Projects inside ProjectCollection on the sidebar
function displayProjects() {
    let alreadyDisplayedProjects = document.getElementById("sidebar-all-projects").childNodes;
    alreadyDisplayedProjects = Array.from(alreadyDisplayedProjects);
    alreadyDisplayedProjects = alreadyDisplayedProjects.map(element => {return element.id});
    for (const project of allProjects) {
        if (!alreadyDisplayedProjects.includes(project.title) 
            && !specialHomeProjects.includes(project.title)) {
            createProjectDiv(project);
        }
    }
}

// creates a single div for a Project and adds it 
// to the "Projects" section on the sidebar
function createProjectDiv(project) {
    const sidebarProjectsDiv = document.getElementById("sidebar-all-projects");

    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", project.title);

    const projectHeader = document.createElement("h3");
    projectHeader.textContent = project.title;

    projectDiv.addEventListener("click", (event) => {
        displayTodos(event, project);
    });

    projectDiv.appendChild(projectHeader);

    sidebarProjectsDiv.appendChild(projectDiv);
}

// EL function used to show all ToDos inside a project on-click
// of Project names under the sidebar
function displayTodos(event, project) {
    const bodyDiv = document.getElementById("body");
    bodyDiv.replaceChildren(); // clears all existing ToDos

    const allProjectTodos = project.todos;

    for (const todo of allProjectTodos) {
        const todoDiv = document.createElement("div");
        todoDiv.setAttribute("id", todo.title);
        todoDiv.textContent = todo.title;
        bodyDiv.appendChild(todoDiv);
    }
}

// defines the body of the page that holds main ToDo items
function createBody() {
    const bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("id", "body");
    
    return bodyDiv;
}

// defines the overlay used when opening up the detailed ToDo menu
function createOverlay() {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    
    return div;
}

function createFooter() {
    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");

    return footerDiv;
}

// sets up the entire webpage with default view
// e.g. sidebar closed and only today's TODOs displayed
function setUpPage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createDetailedTodoForm());
    content.appendChild(createSidebar());
    content.appendChild(createBody());
    content.appendChild(createFooter());
    content.appendChild(createOverlay());
    displayProjects();
}

export default setUpPage;