(function() {
  var app = angular.module( 'todoList', [ 'ngResource' ] );

  app.controller( 'todoListController', [ function() {
    var self = this,
      dataToStore;

    self.newTask = {};
    self.edit = false;
    self.selectedTask = -1;

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

      dataToStore = JSON.stringify( self.listTasks );
      localStorage.setItem( 'todoList', dataToStore );
    };

    self.toggleEdit = function(i) {
      self.edit = !self.edit;
      self.selectTask(i);
      console.log(self.edit);
    }

    self.editTask = function() {
      self.toggleEdit();
      self.selectedTask = -1;
      console.log(self.edit);
      dataToStore = JSON.stringify( self.listTasks );
      localStorage.setItem( 'todoList', dataToStore );
    };

    self.selectTask = function(i) {
      console.log(i);
      self.selectedTask = i;
    };

    self.isToEdit = function(i) {
      return self.selectedTask === i;
    };
  }]);

})();
