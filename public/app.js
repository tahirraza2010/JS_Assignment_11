var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
  var taskText = taskInput.value.trim();
  if (taskText.value) return;

  var listItem = document.createElement("li");

  // Input field to display task text
  var taskContent = document.createElement("input");
  taskContent.type = "text";
  taskContent.value = taskText;
  taskContent.disabled = true;

  // Edit button
  var editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.onclick = () => {
    if (taskContent.disabled) {
      taskContent.disabled = false;
      editButton.innerText = "Save";
    } else {
      taskContent.disabled = true;
      editButton.innerText = "Edit";
    }
  };

  // Delete button
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = () => listItem.remove();

  listItem.appendChild(taskContent);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  taskInput.value = "";
}

// Delete all tasks
function deleteAllTasks() {
  taskList.remove();
}
