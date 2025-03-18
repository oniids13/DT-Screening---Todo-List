const footerYear = document.getElementById('footer-year');
const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list')
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;
const dateToday = document.getElementById('date-today');

let currentYear = new Date().getFullYear();

dateToday.textContent = getFormattedDate();

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
    let newTodo = document.getElementById('todo-input').value;

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
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);

    // Clear input field
    document.getElementById('todo-input').value = '';
}


// Deleting Todo

function removeTodo(e) {
    if (e.target.classList.contains('delete-button')) {
        if(confirm('Are you sure you want to delete this todo?')) {
            let li = e.target.parentElement;
            

            li.classList.add('removing');


            setTimeout(() => {
                li.remove()
            }, 300)
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
        themeToggle.textContent = '🌞';
    } else {
        themeToggle.textContent = '🌜';
    }
})


function getFormattedDate() {
    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let year = String(today.getFullYear()).slice(-2);

    return `${month}/${day}/${year}`;
}

