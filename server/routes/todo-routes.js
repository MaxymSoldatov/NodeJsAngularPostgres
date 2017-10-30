
var pg = require('pg');

var database = require('../config/database.js');
var conString = database.conString;
var results = [];


module.exports = {

	
	createTodo : function(req, res) {

		results = [];

		
		var data = {
			text : req.body.text,
			done : false
		};

  		
  		pg.connect(conString, function(err, client, done) {
   			client.query("INSERT INTO todos(text, done) values($1, $2)", [data.text, data.done]);

			var query = client.query("SELECT * FROM todos ");

			
			query.on('row', function(row) {
		      	results.push(row);
			});

			
			query.on('end', function() { 
				client.end();
				return res.json(results);
			});

		
   		});
    },


	
	getTodos : function(req, res) {

		results = [];

		
  		pg.connect(conString, function(err, client, done) {
		  
			var query = client.query('SELECT * FROM todos ');
			 
			 
				query.on('row', function(row) {
		      	results.push(row);
			});

			
			query.on('end', function() {
			  client.end();
			  return res.json(results);
			});

			
			
   		});
	},



	updateTodo : function(req, res) {

		results = [];

  		var id = req.params.todo_id;

		var data = {
			text : req.body.text,
			done: req.body.done
		};

		console.log("ID= "+id);

		
  		pg.connect(conString, function(err, client, done) {

   			client.query("UPDATE todos SET text=($1), done=($2) WHERE id=($3)", [data.text, data.done, id]);
			var query = client.query("SELECT * FROM todos ORDER BY id ASC");

			
			query.on('row', function(row) {
		      	results.push(row);
			});

			
			query.on('end', function() { 
			  client.end();
			  return res.json(results);
			});

			
   		});	        
    },


	deleteTodo : function(req, res) {

		results = [];
		var id = req.params.todo_id;

		console.log("id= "+id);

		
  		pg.connect(conString, function(err, client, done) {

   			client.query("DELETE FROM todos WHERE id=($1)", [id]);
   
			var query = client.query("SELECT * FROM todos ORDER by id ASC");

			
			query.on('row', function(row) {
		      	results.push(row);
			});

			
			query.on('end', function() { 
			  client.end();
			  return res.json(results);
			});

			
			
   		});	 
	}
};