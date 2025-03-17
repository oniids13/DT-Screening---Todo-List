const footerYear = document.getElementById('footer-year');
const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list')
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

let currentYear = new Date().getFullYear();

// Adding current year in the footer
footerYear.innerText = currentYear

// Form creating new todo event
form.addEventListener('submit', addItem);

// Deleting todo
todoList.addEventListener('click', removeTodo);

// Marking todo as done
todoList.addEventListener('click', todoDone);


// Adding items in the list
function addItem(e) {
    e.preventDefault();

    // getting input value
    let newTodo = document.getElementById('todo').value;

    // Preventing adding new todo
    if (!newTodo.trim()) return;

    // Creating new LI element
    let li = document.createElement('li');
    li.className = 'todo-item';
    li.appendChild(document.createTextNode(newTodo));

    // Adding the new li element to the ul
    todoList.appendChild(li);


    // Creating delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);

    // Clear input field
    document.getElementById('todo').value = '';
}


// Deleting Todo

function removeTodo(e) {
    if (e.target.classList.contains('delete-button')) {
        if(confirm('Are you sure you want to delete this todo?')) {
            var li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }
}

// Marking Task as compeleted

function todoDone(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
}


// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
})


