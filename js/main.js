/*
    TODO: Complete a task (button/query selector).
    TODO: Toggle between buttons.
    TODO: remove tasks from completed tab (class remove).
    TODO: store data in JSON.
*/

// Create an array that will hold the list items
let todoItems = [];
// Create an increment for the # columns
let i = 0;

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    i++;
    todoItems.push(todo);
    renderTodo(todo);
    console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.myform');
// Add a submit event listener
form.addEventListener('submit', event => {
    // Prevent page refresh on submit
    event.preventDefault();
// Select the text inputfgdfg
const input = document.getElementById('formInput');

// Get the value of the input and remove whitespaces
const text = input.value.trim();
if(text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
}
});

function renderTodo(todo) {
    // Select the first element with an id of table
    const table = document.getElementById("mytable");
    // Create an increment for the # column
    // Use the ternary operator to chec if 'todo-item' is true
    // If so, assing 'done' to 'isChecked'. Otherwise, assing an empty string
    const isChecked = todo.checked ? 'done': '';
    // Create a tr element and assing it to 'node'
    const node = document.createElement("tr");
    // Set the class attributes
    node.setAttribute('data-key', todo.id);
    // Set the content of the 'tr' element created above
    node.innerHTML = `
    <th id="${todo.id}">${i}</th>
    <th>${todo.text}</th>
    `;
    table.append(node);
}