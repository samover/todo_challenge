(function() {
  var app = angular.module( 'todoList', [ 'ngResource' ] );

  app.controller( 'todoListController', [ function() {
    var self = this; 
    self.newTask = {};

    if( localStorage.getItem( 'todoList' ) === null ) {
      self.listTasks = { "items": [] };
    } else {
      self.listTasks = JSON.parse(localStorage.getItem( 'todoList' ));
    } 

    self.addTask = function(){
      self.newTask.createdOn = self.newTask.createdOn || Date.now();
      self.newTask.status = self.newTask.status || 1;
      self.listTasks.items.push( self.newTask );
      self.newTask = {};

      var dataToStore = JSON.stringify( self.listTasks );
      localStorage.setItem( 'todoList', dataToStore );
    };

  }]);

})();
