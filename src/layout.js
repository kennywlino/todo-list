import ToDo from "./todo";
import Project from "./project";
import ProjectCollection from "./projectCollection";
import './style.css';

import HomeIcon from './assets/home.svg';
import ProjectIcon from './assets/rectangle-stack.svg';

let projectCollection = new ProjectCollection();
projectCollection.loadFromLocalStorage();
// projectCollection.loadSamples();
let allProjects = projectCollection.projects;

// defined so we don't include them in the "Projects" section AND "Home" section
const specialHomeProjects = ["Inbox", "Today", "Next 7 Days"];

// defines header to display page title
function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    // holds sidebar button and title headline
    const leftDiv = document.createElement("div");
    leftDiv.setAttribute("id", "left-div");

    const sidebarButton = document.createElement("button");
    sidebarButton.setAttribute("id" , "sidebar-button");
    sidebarButton.setAttribute("type", "button");
    sidebarButton.addEventListener("click", openSidebar);

    // title headline
    const pageName = document.createElement("h1");
    pageName.textContent = "ToDo List";

    leftDiv.appendChild(sidebarButton);
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

// EL function used to toggle (open/close) the sidebar menu
function openSidebar() {
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
    todoFormInput.setAttribute("id", 'todo-quick-input');

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
    detailsButton.addEventListener("click", openDetailedTodo);

    const addButton = document.createElement("button");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("id", "add-button");
    addButton.addEventListener("click", addQuickTodo);

    buttonsDiv.append(detailsButton);
    buttonsDiv.append(addButton);

    inputAndButtonsDiv.appendChild(buttonsDiv);

    return todoForm;
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
    todoFormInput.setAttribute("id", 'todo-detailed-input');

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

    // dropdown menu for project options

    const dropdown = document.createElement("select");
    dropdown.setAttribute("id", "project-dropdown");
    dropdown.setAttribute("name", "project-dropdown");

    const inboxOption = document.createElement("option");
    inboxOption.setAttribute("value", "Inbox");
    inboxOption.textContent = "Inbox";
    inboxOption.setAttribute("selected", true);
    dropdown.appendChild(inboxOption);

    const optionElements = loadProjectDropdown();
 
    for (const elem of optionElements) {
        dropdown.appendChild(elem);
    }

    todoForm.appendChild(detailsInput);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(dropdown);

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
    addButton.addEventListener("click", addDetailedTodo);

    actionButtons.appendChild(cancelButton);
    actionButtons.appendChild(addButton);

    div.appendChild(actionButtons);
    
    return div;
}

// loads all available projects - "Today" and "Next 7 Days"
// as an option in the detailed ToDos menu
function loadProjectDropdown() {
    // rest of projects that are not "Inbox", "Today" or "Next 7 Days"
    let projectOptions = allProjects.slice(3);

    let alreadyDisplayedProjects = [];

    if (document.getElementById("project-dropdown")) {
        alreadyDisplayedProjects = document.getElementById("project-dropdown").childNodes;
        alreadyDisplayedProjects = Array.from(alreadyDisplayedProjects);
        alreadyDisplayedProjects = alreadyDisplayedProjects.map(element => {return element.value});  
    }

    let optionElements = [];
    if (projectOptions.length > 0) {
        for (const project of projectOptions) {
            if (! alreadyDisplayedProjects.includes(project.title)) {
                const option = document.createElement("option");
                option.setAttribute("value", project.title);
                option.textContent = project.title;
                optionElements.push(option);
            }
        }
    }
    return optionElements;
}

// EL function used to add a basic ToDo to Inbox from the quick ToDo bar
// located in the header
function addQuickTodo() {
    let quickTodoInput = document.getElementById("todo-quick-input");
    const todo = new ToDo(quickTodoInput.value);
    quickTodoInput.value = '';
    projectCollection.addTodo("Inbox", todo);
    projectCollection.saveToLocalStorage();
}

// EL function used to add a detailed ToDo to any project of choice
// using the ToDo pop-up menu

function addDetailedTodo() {
    let detailedTodoInput = document.getElementById("todo-detailed-input");
    let detailsInput = document.querySelector(".details-input");
    let dueDateInput = document.querySelector(".due-date-input");
    let projectDropdown = document.getElementById("project-dropdown");
    const selectedProject = projectDropdown.options[projectDropdown.selectedIndex].value;

    const todo = new ToDo(detailedTodoInput.value, detailsInput.value, dueDateInput.value);

    projectCollection.addTodo(selectedProject, todo);
    projectCollection.saveToLocalStorage();
    closeDetailedTodo(); 
}

// EL function used to open detailed ToDo menu 
function openDetailedTodo() {
    const todoPopUp = document.getElementById("todo-popup");
    todoPopUp.classList.add("active");
    
    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    // sets detailed ToDo input to contents of quick Todo
    let quickTodoInput = document.getElementById("todo-quick-input");
    let detailedTodoInput = document.getElementById("todo-detailed-input");
    if (quickTodoInput.value != '') {
        detailedTodoInput.value = quickTodoInput.value;
        quickTodoInput.value = '';
    }
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

    // Home section of sidebar
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "sidebar-home");

    const homeIconAndHeaderDiv = document.createElement("div");
    homeIconAndHeaderDiv.setAttribute("id", "home-icon-and-header");

    const homeIcon = new Image();
    homeIcon.src = HomeIcon;
    homeIconAndHeaderDiv.appendChild(homeIcon);

    const homeHeader = document.createElement("h2");
    homeHeader.textContent = "Home";

    homeIconAndHeaderDiv.appendChild(homeHeader);
    homeDiv.appendChild(homeIconAndHeaderDiv);

    const sidebarHomeProjectsDiv = document.createElement("div");
    sidebarHomeProjectsDiv.setAttribute("id", "sidebar-home-projects");

    // Inbox, Today, Next 7 Days
    const homeProjectDivs = loadHomeProjectDivs();
    for (const projectDiv of homeProjectDivs) {
        sidebarHomeProjectsDiv.appendChild(projectDiv);
    }
    
    homeDiv.appendChild(sidebarHomeProjectsDiv);

    // projects section of sidebar
    const projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("id", "sidebar-projects");

    const projectsIconsAndHeaderDiv = document.createElement("div");
    projectsIconsAndHeaderDiv.setAttribute("id", "projects-icons-and-header");

    const projectsIcon = new Image();
    projectsIcon.src = ProjectIcon;
    projectsIconsAndHeaderDiv.appendChild(projectsIcon);

    const projectsHeader = document.createElement("h2");
    projectsHeader.textContent = "Projects";

    projectsIconsAndHeaderDiv.appendChild(projectsHeader);
    projectsDiv.appendChild(projectsIconsAndHeaderDiv);

    // new project button
    const newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("type", "button");
    newProjectButton.setAttribute("id", "new-project-button");
    newProjectButton.addEventListener("click", showNewProjectForm);

    projectsIconsAndHeaderDiv.appendChild(newProjectButton);

    // div to hold all projects inside ProjectCollection

    const allProjectsDiv = document.createElement("div");
    allProjectsDiv.setAttribute("id", "sidebar-all-projects");
    
    projectsDiv.appendChild(createNewProjectForm());
    projectsDiv.appendChild(allProjectsDiv);

    const allProjectDivs = loadProjectsDivs();

    for (const projectDiv of allProjectDivs) {
        allProjectsDiv.appendChild(projectDiv);
    }

    sidebarDiv.appendChild(homeDiv);
    sidebarDiv.appendChild(projectsDiv);

    return sidebarDiv;
}

// loads the divs containing "Inbox", "Today", "Next 7 Days"
function loadHomeProjectDivs() {
    let homeProjectDivs = [];
    for (const projName of specialHomeProjects) {
        const homeProject = projectCollection.getProject(projName);
        homeProjectDivs.push(createProjectDiv(homeProject));
    }
    return homeProjectDivs;

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
    addButton.addEventListener("click", addNewProject);

    inputAndButtonsDiv.appendChild(addButton);

    projectForm.appendChild(inputAndButtonsDiv);

    return projectForm;

}

// EL function for adding new project
function addNewProject() {
    let projectName = document.querySelector(".project-input");
    const project = new Project(projectName.value);
    projectCollection.addNewProject(project);
    projectCollection.saveToLocalStorage();
    projectName.value = '';

    const allProjectDivs = document.getElementById("sidebar-all-projects");
    allProjectDivs.appendChild(loadProjectsDivs()[0]);

    const projectDropdown = document.getElementById("project-dropdown");
    projectDropdown.appendChild(loadProjectDropdown()[0]);

    hideNewProjectForm();
}

// displays and sets up the Projects inside ProjectCollection on the sidebar
function loadProjectsDivs() {
    let alreadyDisplayedProjects = [];
    if (document.getElementById("sidebar-all-projects")) {
        alreadyDisplayedProjects = document.getElementById("sidebar-all-projects").childNodes;
        alreadyDisplayedProjects = Array.from(alreadyDisplayedProjects);
        alreadyDisplayedProjects = alreadyDisplayedProjects.map(element => {return element.id});  
    }
    let projectsToLoad = [];
    for (const project of allProjects) {
        if (!alreadyDisplayedProjects.includes(project.title) 
            && !specialHomeProjects.includes(project.title)) {
            projectsToLoad.push(createProjectDiv(project));
        }
    }
    return projectsToLoad;
}

// creates a single div for a Project and adds it 
// to the "Projects" section on the sidebar
function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", project.title);

    const projectHeader = document.createElement("h3");
    projectHeader.textContent = project.title;

    projectDiv.addEventListener("click", (event) => {
        displayTodos(event, project);
    });

    projectDiv.appendChild(projectHeader);
    
    return projectDiv;
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
}

export default setUpPage;