const express = require('express');
const controller = require('../controller/controller');

const route = express.Router();

// Url: http://localhost:5000/api/getAll
// Method: GET
// Desc: Fetch All Todos
// Security: Public
route.get('/getAll', controller.getAll);

// Url: http://localhost:5000/api/create
// Method: GET
// Desc: Create New Todo
// Security: Public
route.post('/create', controller.createTodo);

// Url: http://localhost:5000/api/remove/:id
// Method: DELETE
// Desc: Delete By Id
// Security: Public
route.delete('/remove/:id', controller.deleteTodo);

// Url: http://localhost:5000/api/update/:id
// Method: PUT
// Desc: Update Todo Status
// Security: Public
route.put('/update/:id', controller.updateTodo);


module.exports = route;