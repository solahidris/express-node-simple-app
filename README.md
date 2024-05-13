# A Simple Express and Node Task Manager App

**app.js**
- simple express and node
- REST api (get, post, pull, delete)
- setup middleware and route

**index.html**
- display the tasks instead of going to localhost:3000/tasks to see stuff

<br/>

# Stuff you can use for this simple express app

View all tasks:
- curl http://localhost:3000/tasks

Add a new task:
- curl -X POST -H "Content-Type: application/json" -d '{"title":"Task Title", "description":"Task Description"}' http://localhost:3000/tasks
- curl -X POST -H "Content-Type: application/json" -d '{"title":"Task Title2", "description":"Task Description2"}' http://localhost:3000/tasks

Update a task:
- Replace :id with the ID of the task you want to update. Starts with 1.
- curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Title", "description":"Updated Description"}' http://localhost:3000/tasks/:id

Delete a task:
- curl -X DELETE http://localhost:3000/tasks/:id
