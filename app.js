const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Route - Serve static files (HTML, CSS, JavaScript)
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// --------------
// TASKS APP CODE BELOW
// --------------

let tasks = [];

// Get all tasks
app.get("/tasks", (req,res) => {
  res.json(tasks);
});

// Add new task
app.post("/tasks", (req,res) => {
  const { title, description } = req.body;
  const newTask = { id:tasks.length+1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req,res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { id, title, description };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Delete a task
app.delete("/tasks/:id", (req,res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "task deleted" });
});


// STUFF YOU CAN USE FOR THIS SIMPLE EXPRESS APP
// IF YOU WANNA PLAY AROUND I GUESS

// View all tasks:
// curl http://localhost:3000/tasks

// Add a new task:
// curl -X POST -H "Content-Type: application/json" -d '{"title":"Task Title", "description":"Task Description"}' http://localhost:3000/tasks
// curl -X POST -H "Content-Type: application/json" -d '{"title":"Task Title2", "description":"Task Description2"}' http://localhost:3000/tasks

// Update a task:
// Replace :id with the ID of the task you want to update. Starts with 1.
// curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Title", "description":"Updated Description"}' http://localhost:3000/tasks/:id

// Delete a task:
// curl -X DELETE http://localhost:3000/tasks/:id