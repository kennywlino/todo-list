import ToDo from "./todo";
import Project from "./project";
import './style.css';

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const pageName = document.createElement("h1");
    pageName.textContent = "ToDo List";

    header.appendChild(pageName);

    return header;
}

function setUpPage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
}

/* const testTodo1 = new ToDo("homework");
const testTodo2 = new ToDo("workout");

console.log(testTodo1.title);
console.log(testTodo2.title)

const content = document.querySelector('#content');

const todoDiv = document.createElement('div');
todoDiv.textContent = testTodo1.title;
todoDiv.classList.add('hello');

content.appendChild(todoDiv);

*/

export default setUpPage;