let task;
function addTask() {
  var taskNameInput = document.getElementById('taskName');
  var taskTypeInput = document.getElementById('taskType');

  var name = taskNameInput.value.trim();
  var type = taskTypeInput.value;

  if (!name) {
    alert("Please enter a task name.");
    return;
  }

  const newTask = {
    taskName: name,
    taskType: type,
    dateAdded: new Date().toLocaleString()
  };

  tasks.push(newTask);
  taskNameInput.value = ''; // Clear input
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = ''; // Clear list

  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const filterType = document.getElementById('filterType').value;

  tasks
    .filter(task => task.taskName.toLowerCase().includes(searchText))
    .filter(task => !filterType || task.taskType === filterType)
    .forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'task';

      // Color coding
      switch (task.taskType) {
        case 'Task': li.classList.add('red'); break;
        case 'In Progress': li.classList.add('orange'); break;
        case 'Done': li.classList.add('green'); break;
      }

      li.innerHTML = `
        <strong>${task.taskName}</strong> - ${task.taskType} <br>
        <small>${task.dateAdded}</small>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;

      list.appendChild(li);
    });
}

function editTask(index) {
  const newName = prompt("Edit task name:", tasks[index].taskName);
  if (newName === null) return; // Cancelled
  const newType = prompt("Edit task type (Task, In Progress, Done):", tasks[index].taskType);
  if (newType === null) return;

  if (newName.trim() && ["Task", "In Progress", "Done"].includes(newType)) {
    tasks[index].taskName = newName.trim();
    tasks[index].taskType = newType;
    renderTasks();
  } else {
    alert("Invalid input. Please try again.");
  }
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}
