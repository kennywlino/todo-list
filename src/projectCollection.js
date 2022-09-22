import Project from "./project";

// holds all projects contained on ToDo List page
// includes Inbox, Today, and Next 7 Days as defaults
export default class ProjectCollection {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('Next 7 Days'));
    }   

    addNewProject(newProject) {
        if (! this.projects.find((project) => project.title === newProject)) {
            this.projects.push(newProject);
        }
        this.saveProjectCollection();
    }

    deleteProject(projectToDelete) {
        const project = this.projects.find((project) => project.title === projectToDelete);
        this.projects.splice(this.projects.indexOf(project), 1)
        this.saveProjectCollection();
    }

    // saves to localStorage variable
    saveProjectCollection() {
        localStorage.setItem("ProjectCollection", JSON.stringify(this));
    }

    // loads ProjectCollection from localStorage
    loadProjectCollection() {
        JSON.parse(localStorage.getItem('ProjectCollection'));
    }
}
