
var todoRoutes = require('./routes/todo-routes.js');


module.exports = function(app) {


	app.post('/api/todos', todoRoutes.createTodo);
	app.get('/api/todos', todoRoutes.getTodos);
	app.put('/api/todos/:todo_id', todoRoutes.updateTodo);
	app.delete('/api/todos/:todo_id', todoRoutes.deleteTodo);
};