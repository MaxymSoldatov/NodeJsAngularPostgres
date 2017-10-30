'use strict';


angular.module('postgreDbApp.controllers', [])

.controller('MainCtrl', function($scope, $q, getTodosService, 
	createTodoService, updateTodoService, deleteTodoService) {

	$scope.formData = {};
	$scope.todos={};

	
	getTodosService.getTodos()
		.then(function(answer) {
			$scope.todos = answer;
		}
		
  	);


	
	$scope.createTodo = function() {
		createTodoService.createTodo($scope.formData)
			.then(function(answer) {
				$scope.todos = answer;
			}
			
	  	);
	};


	
	$scope.editTodo = function(id, txt, isDone) {

		var updateData = {"text":txt, "done": isDone};

		updateTodoService.updateTodo(id, updateData)
			.then(function(answer) {
				$scope.todos = answer;
			}
			);
	};


	
	$scope.deleteTodo = function(id) 
	{
		deleteTodoService.deleteTodo(id)
			.then(function(answer) {
				$scope.todos = answer;
			}
	  	);

	};
});
