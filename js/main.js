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

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
  }

// Select the form element
const form = document.querySelector('.myform');
// Add a submit event listener
form.addEventListener('submit', event => {
    // Prevent page refresh on submit
    event.preventDefault();
// Select the text input
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
    const item = document.querySelector(`[data-key='${todo.id}']`);
    // Create an increment for the # column
    // Use the ternary operator to chec if 'todo-item' is true
    // If so, assing 'done' to 'isChecked'. Otherwise, assing an empty string
    const isChecked = todo.checked ? 'done': '';
    // Create a tr element and assing it to 'node'
    const node = document.createElement("tr");
    // Set the class attributes
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    // Set the content of the 'tr' element created above
    node.innerHTML = `
    <th><input id="${todo.id}" type="checkbox" /> <label for="${todo.id}" class="tick js-tick"></label></th>
    <th scope="row" id="${todo.id}">${i}</th>
    <th scope="row">${todo.text}</th>
    <th><button class="delete-todo js-delete-todo btn"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
    </svg></button></th>
    `;
    // If the item already exists in the DON
    if (item) {
        // Replace it
        table.replaceChild(node, item);
    } else {
        // Otherwise append it to the end of the list
        table.append(node);
    }
}

// Select the entire list
const table = document.getElementById('mytable');
table.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});

