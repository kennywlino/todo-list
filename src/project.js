export default class Project {
    constructor(title) {
        this._title = title;
        this._todos = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get todos() {
        return this._todos;
    }

    addTodo(todo) {
        this._todos.push(todo);
    }
}