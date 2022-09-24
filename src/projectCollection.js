import Project from "./project";
import ToDo from "./todo";

// holds all projects contained on ToDo List page
// includes Inbox, Today, and Next 7 Days as defaults
export default class ProjectCollection {
    constructor() {
        this._projects = []
        this.addDefaultProjects();
        this.loadFromLocalStorage();
    }

    get projects() {
        return this._projects;
    }

    set projects(arr) {
        return this._projects = arr;
    }
    
    // adds in Inbox, Today, and Next 7 Days if not in PC already
    addDefaultProjects() {
        if (!localStorage.getItem('ProjectCollection')) {
            this._projects.push(new Project('Inbox'));
            this._projects.push(new Project('Today'));
            this._projects.push(new Project('Next 7 Days'));
            this.saveToLocalStorage();
        }
    }
    
    addNewProject(proj) {
        if (! this.getProject(proj.title)) {
            this.projects.push(proj);
        }
        this.saveToLocalStorage();
    }

    deleteProject(projTitle) {
        const proj = this.getProject(projTitle);
        this.projects.splice(this.projects.indexOf(proj), 1)
        this.saveToLocalStorage();
    }

    getProject(projTitle) {
        return this.projects.find((p) => p.title === projTitle);
    }

    addTodo(projTitle, todo) {
        const project = this.getProject(projTitle);
        project.addTodo(todo);
        this.saveToLocalStorage();
    }

    deleteTodo(projTitle, todoName) {
        const project = this.getProject(projTitle);
        const todo = this.getTodo(projTitle, todoName);
        project.deleteTodo(todo);
        this.saveToLocalStorage();
    }

    getTodo(projTitle, todoName) {
        const project = this.getProject(projTitle);
        const todos = project.todos;
        return todos.find((todo) => todo.title === todoName);
    }

    // saves to localStorage variable
    saveToLocalStorage() {
        localStorage.setItem("ProjectCollection", JSON.stringify(this.projects));
    }

    // loads ProjectCollection from localStorage
    loadFromLocalStorage() {
        // all projects stored in localStorage have to be reingested as Project objects 
        // before using in layout since JSON does not save this info
        if (localStorage.getItem('ProjectCollection')) {
            let allProjects = JSON.parse(localStorage.getItem('ProjectCollection'));
            allProjects = allProjects.map((project) => Object.assign(new Project, project));
            for (const project of allProjects) {
                // ToDos also must be reingested as ToDo objects
                project._todos = project._todos.map((todo) => Object.assign(new ToDo, todo));
                this.projects = allProjects;
            }
        }
    }
}
