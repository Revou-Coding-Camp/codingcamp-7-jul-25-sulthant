// Global List
let tasks = [];

// Function to add task
function addTask() {
    const taskinput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

    //Validate inputs
    if (taskinput.value.trim() === '' || dueDateInput.value === '') {
        alert('Please fill in both task and due date.');
        return;
    } else {
        // Create a new task object
        const newTask = {
            id: Date.now(), // Unique ID based on timestamp
            task: taskinput.value.trim(),
            dueDate: dueDateInput.value,
            completed: false
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Clear the input fields
        taskinput.value = '';
        dueDateInput.value = '';

        // Log the new task to the console
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the current task list 
    tasks.forEach(element => {
        const taskItem = `
        <div class="flex justify-between items-center p-[8px] border-b">
            <div class="flex flex-col">
                <span class="text-lg">${element.task}</span>
                <span class="text-sm text-gray-500>${element.dueDate}</span>
            </div>
            <button class="bg-green-500 text-white p-[4px] rounded" onclick="toggleTaskCompletion(${element.id})">${element.completed ? 'Undo' : 'Complete'}</button>
            <button class="bg-red-500 text-white p-[4px] rounded" onclick="deleteTask(${element.id})">Delete</button>
        </div>
        `;
        taskList.innerHTML += taskItem;
    });
}

//Function to delete a specific task
function deleteTask(id) {
    // Find the index of the task to be deleted
    const taskIndex = tasks.findIndex(task => task.id === id);
    // If the task is found, remove it from the tasks array
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        displayTasks(); // Refresh the task list display
    }
}

// Function to delete all task 
function deleteAllTasks() {
    tasks = []; // Clear the tasks array
    displayTasks(); // Refresh the task list display
}

function toggleTaskCompletion(id) {
    // Find the task by ID
    const task = tasks.find(task => task.id === id);
    if (task) {
        // Toggle the completed status
        task.completed = !task.completed;
        displayTasks(); // Refresh the task list display
    }
}

// Function to filter task 
{
}

