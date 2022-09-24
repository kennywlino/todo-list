export default class Project {
    constructor(title, todos = []) {
        this._title = title;
        this._todos = todos;
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

    set todos(arr) {
        this.todos = arr;
    }

    addTodo(todo) {
        if(! this.getTodo(todo.title)) {
            this._todos.push(todo);
        }
    }

    deleteTodo(todo) {
        this._todos.splice(this._todos.indexOf(todo), 1);
    }

    getTodo(todoTitle) {
        return this.todos.find((todo) => todo.title === todoTitle);
    }
}