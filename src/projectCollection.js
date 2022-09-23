import Project from "./project";

// holds all projects contained on ToDo List page
// includes Inbox, Today, and Next 7 Days as defaults
export default class ProjectCollection {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('Next 7 Days'));
        this.saveToLocalStorage();
    }   

    addNewProject(newProject) {
        if (! this.projects.find((project) => project.title === newProject)) {
            this.projects.push(newProject);
        }
        this.saveToLocalStorage();
    }

    deleteProject(projectToDelete) {
        const project = this.projects.find((project) => project.title === projectToDelete);
        this.projects.splice(this.projects.indexOf(project), 1)
        this.saveToLocalStorage();
    }

    // saves to localStorage variable
    saveToLocalStorage() {
        localStorage.setItem("ProjectCollection", JSON.stringify(this));
    }

    // loads ProjectCollection from localStorage
    loadFromLocalStorage() {
        let allProjects = [];
        // all projects stored in localStorage have to be reingested as Project objects 
        // before using in layout
        if (localStorage.getItem('ProjectCollection')) {
            const allProjectsPC = JSON.parse(localStorage.getItem('ProjectCollection')).projects;
            for (const project of allProjectsPC) {
                allProjects.push(new Project(project._title, project._todos));
        }
        return allProjects;
        }
    }
}
