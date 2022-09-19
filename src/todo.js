export default class ToDo {
    constructor(title, description, dueDate, status) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._status = status;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        return this._description = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(date) {
        this.dueDate = date;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}