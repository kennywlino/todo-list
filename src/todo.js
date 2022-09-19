class ToDo {
    constructor(title, description, dueDate, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }

    get description() {
        return this.description;
    }

    set description(value) {
        return this.description = value;
    }

    get dueDate() {
        return this.dueDate;
    }

    set dueDate(date) {
        this.dueDate = date;
    }

    get status() {
        return this.status;
    }

    set status(value) {
        this.status = value;
    }
}