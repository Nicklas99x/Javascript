const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [

];

// Hent alle opgaver
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Tilføj en ny opgave
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false,
    };
    tasks.push(newTask);
    res.json(newTask);
});
// Opdater en opgave
app.put("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTitle = req.body.title;
    const completed = req.body.completed;
  
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
  
    if (taskIndex !== -1) {
        // Opdater kun hvis de er definerede i anmodningen
    if (updatedTitle !== undefined) {
        tasks[taskIndex].title = updatedTitle;
    }
    if (completed !== undefined) {
        tasks[taskIndex].completed = completed;
    }
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});  

// Slet en opgave
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
