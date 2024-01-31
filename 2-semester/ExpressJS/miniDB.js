const apiUrl = "http://localhost:3000/tasks";
// Fetch og vis alle opgaver ved indlæsning
$(document).ready(() => {
  fetchTasks();
});
// Deklarer tasks som en global variabel
let tasks = [];
// Funktion til at hente og vise alle opgaver
function fetchTasks() {
  $.ajax({
    url: apiUrl,
    type: "GET",
    success: (fetchedTasks) => {
      tasks = fetchedTasks; // Opdaterer den globale variabel med de hentede opgaver
      displayTasks(tasks);
    }
  });
}

// Funktion til at vise opgaverne på siden
function displayTasks(tasks) {
    const todoList = $("#todo-list");
    todoList.empty();

    tasks.forEach((task) => {
        const taskItem = $("<li>").text(task.title);
        if (task.completed) {
        taskItem.addClass("completed");
        }

        const lineSeparator = $("<hr>");
        const deleteButton = $("<button>").text("Delete").click(() => deleteTask(task.id));
        const updateButton = $("<button>").text("Update").click(() => updateTaskUI(task.id));
        const completeButton = $("<button>").text(task.completed ? "Undo" : "Complete")
                                        .click(() => uncompleteTask(task.id, task.completed));

        taskItem.append(lineSeparator, deleteButton, updateButton, completeButton);
        todoList.append(taskItem);
    });
}  

// Funktion til at tilføje en ny opgave
function addTask() {
    const taskTitle = $("#task").val();
    if (taskTitle) {
        $.ajax({
            url: apiUrl,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ title: taskTitle, completed: false }),
            success: () => {
            fetchTasks();
            $("#task").val('');
            }
        });
    }
}

// Funktion til at opdatere en opgave
function updateTask(taskId, updatedTitle) {
    $.ajax({
        url: `${apiUrl}/${taskId}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({ title: updatedTitle, completed: false }),
        success: () => {
        fetchTasks();
        }
    });
}

// Funktion til at opdatere en opgave via brugergrænsefladen
function updateTaskUI(taskId) {
    const updatedTitle = prompt("Enter updated task title:");
    if (updatedTitle) {
        updateTask(taskId, updatedTitle);
    }
}

function completeTask(taskId) {
    const task = tasks.find((task) => task.id === taskId);

    $.ajax({
        url: `${apiUrl}/${taskId}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({ completed: true, title: task.title }),
        success: () => {
        fetchTasks();
        }
    });
}

function uncompleteTask(taskId, completed) {
    $.ajax({
      url: `${apiUrl}/${taskId}`,
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify({ completed: !completed }), // Skift til modsat værdi
      success: () => {
        fetchTasks();
      }
    });
  }

// Funktion til at slette en opgave
function deleteTask(taskId) {
    $.ajax({
    url: `${apiUrl}/${taskId}`,
    type: "DELETE",
    success: () => {
        fetchTasks();
    }
    });
}