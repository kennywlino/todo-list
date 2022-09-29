import Project from "./project";
import ToDo from "./todo";

// holds all projects contained on ToDo List page
// includes Inbox, Today, and Next 7 Days as defaults
export default class ProjectCollection {
    constructor() {
        this._projects = []
        this.addDefaultProjects();
    }

    get projects() {
        return this._projects;
    }

    set projects(arr) {
        return this._projects = arr;
    }
    
    // adds in Inbox, Today, and Next 7 Days 
    addDefaultProjects() {
        this._projects.push(new Project('Inbox'));
    }
    
    addNewProject(proj) {
        if (! this.getProject(proj.title)) {
            this.projects.push(proj);
        }
    }

    deleteProject(projTitle) {
        const proj = this.getProject(projTitle);
        this.projects.splice(this.projects.indexOf(proj), 1)
    }

    getProject(projTitle) {
        return this.projects.find((p) => p.title === projTitle);
    }

    addTodo(projTitle, todo) {
        const project = this.getProject(projTitle);
        project.addTodo(todo);
    }

    deleteTodo(projTitle, todoName) {
        const project = this.getProject(projTitle);
        const todo = this.getTodo(projTitle, todoName);
        project.deleteTodo(todo);
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

    // loads a set of sample projects and ToDos to show functionality
    loadSamples() {
        this.projects = [];
        this.addDefaultProjects();
        let projectPersonal = new Project("Personal");
        let todoPersonal1 = new ToDo("Do laundry", "Separate colors and whites!", "2022-03-27");
        let todoPersonal2 = new ToDo("Go grocery shopping", "See shopping list", "2022-03-30");
        let todoPersonal3 = new ToDo("Buy Jenny's b-day present", "Soap or candles?", "2022-04-12");
        projectPersonal.addTodo(todoPersonal1);
        projectPersonal.addTodo(todoPersonal2);
        projectPersonal.addTodo(todoPersonal3);
        let projectWork = new Project("Work");
        let todoWork1 = new ToDo("Write weekly report", "Add links to all tickets", "2022-03-29");
        let todoWork2 = new ToDo("Prepare presentation", "Keep under 10 minutes", "2022-04-16");
        let todoWork3 = new ToDo("Meet with boss", "Talk about promotion?", "2022-05-02");
        projectWork.addTodo(todoWork1);
        projectWork.addTodo(todoWork2);
        projectWork.addTodo(todoWork3);
        let projectTrip = new Project("Trip");
        let todoTrip1 = new ToDo("Buy airplane tickets", "Find non-stop flight if possible", "2022-04-04");
        let todoTrip2 = new ToDo("Pack bags", "Bring sunscreen!", "2022-05-15")
        let todoTrip3 = new ToDo("Buy souvenirs to bring", "Magnets or food?", "2022-05-01");
        projectTrip.addTodo(todoTrip1);
        projectTrip.addTodo(todoTrip2);
        projectTrip.addTodo(todoTrip3);
        this.addNewProject(projectPersonal);
        this.addNewProject(projectWork);
        this.addNewProject(projectTrip);
    }
}
