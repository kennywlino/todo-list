export default class ToDo {
    constructor(title, details = '', dueDate = '', completed = false)  {
        this._title = title;
        this._details = details;
        this._dueDate = dueDate;
        this._completed = completed;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get details() {
        return this._details;
    }

    set description(value) {
        return this._details = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(date) {
        this.dueDate = date;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}