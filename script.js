const footerYear = document.getElementById('footer-year');
const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list')
let currentYear = new Date().getFullYear();

// Adding current year in the footer
footerYear.innerText = currentYear

// Form submit event
form.addEventListener('submit', addItem);


// Adding items in the list
function addItem(e) {
    e.preventDefault();

    // getting input value
    let newTodo = document.getElementById('todo').value;

    // Creating new LI element
    let li = document.createElement('li');
    li.className = 'todo-item';
    li.appendChild(document.createTextNode(newTodo));

    // Adding the new li element to the ul
    todoList.appendChild(li);

    // Creating checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-check';
    li.appendChild(checkbox);
}
