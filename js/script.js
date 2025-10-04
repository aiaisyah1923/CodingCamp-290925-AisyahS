// Delete a todo item by index
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoTable();
}
// Initialize an empty array to store todo items
let todos = [];

// Listen for form submit (Enter)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo();
    });
    renderTodoTable();
});


function addTodo () {
    // Get Input values
    const todoInput = document.getElementById('todo-inputs');
    const todoDate = document.getElementById('todo-date');
    // Validate input
    if (validateInput(todoInput.value, todoDate.value)) {
        let todo = { task: todoInput.value, date: todoDate.value, status: 'Pending' };
        todos.push(todo);
        renderTodoTable();
        todoInput.value = '';
        todoDate.value = '';
    }
}


function renderTodoTable() {
    const tbody = document.querySelector('.todo-list-body');
    tbody.innerHTML = '';
    if (todos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#aaa; padding:16px;">No task found</td></tr>`;
        return;
    }
    todos.forEach((todo, index) => {
        tbody.innerHTML += `
            <tr>
                <td style="border:1px solid #6c6c8a; padding:8px;">${todo.task}</td>
                <td style="border:1px solid #6c6c8a; padding:8px;">${todo.date}</td>
                <td style="border:1px solid #6c6c8a; padding:8px;">${todo.status}</td>
                <td style="border:1px solid #6c6c8a; padding:8px;">
                    <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
            </tr>
        `;
    });
}


function deleteAllTodo () {
    //Clear the todos array
    todos = [];
    renderTodoTable();
}

function filterTodo () {}

// Validate input fields
function validateInput (todo, date) {
    // Check if fields are empty
    if (todo === '' || date === '') {
        // show an alert if validation fails
        alert('Please fill in all fields.');
        return false;
    }

    // Input is valid
    return true;
}