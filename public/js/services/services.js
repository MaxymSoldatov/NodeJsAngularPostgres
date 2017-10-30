

'use strict';

angular.module('postgreDbApp.services', [])


.factory('getTodosService', function($http, $q) {


	var getTodos = function() {
	    
    	var deferred = $q.defer();

        $http.get('/api/todos/')
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    
    return {
        getTodos: getTodos
    };
})




.factory('createTodoService', function($http, $q) {


	var createTodo = function(todo) {
	    
    	var deferred = $q.defer();

        $http.post('/api/todos/', todo)
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    
    return {
        createTodo: createTodo
    } 
})




.factory('updateTodoService', function($http, $q) {

	
	var updateTodo = function(id, updateData) {
	    
    	var deferred = $q.defer();

        $http.put('/api/todos/' + id, updateData)
        .success(function(data) {
        	console.log("Success");
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	console.log("Error");
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    
    return {
        updateTodo: updateTodo
    } 
})



.factory('deleteTodoService', function($http, $q) {


	var deleteTodo = function(id) {
	    
    	var deferred = $q.defer();

        $http.delete('/api/todos/' + id)        
        .success(function(data) {
        	deferred.resolve(data);
        })
        .error(function(reason) {
        	deferred.reject(reason);
        });
        return deferred.promise
    }

    
    return {
        deleteTodo: deleteTodo
    } 
});
