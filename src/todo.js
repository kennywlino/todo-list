export default class ToDo {
    constructor(title, details, dueDate, status) {
        this._title = title;
        this._details = details;
        this._dueDate = dueDate;
        this._status = status;
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

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}