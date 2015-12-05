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
      self.storeData();
    };

    self.toggleEdit = function(i) {
      self.edit = !self.edit;
      self.selectTask(i);
    }

    self.editTask = function() {
      self.toggleEdit();
      self.selectedTask = -1;
      self.storeData();
    };

    self.completeTask = function(i) {
      if(self.listTasks.items[i].status === 0) {
        self.listTasks.items[i].status = 1;
      } else {
        self.listTasks.items[i].status = 0;
      }

      self.storeData();
    }
    
    self.storeData = function() {
      dataToStore = JSON.stringify( self.listTasks );
      localStorage.setItem( 'todoList', dataToStore );
    }

    self.selectTask = function(i) {
      self.selectedTask = i;
    };

    self.isToEdit = function(i) {
      return self.selectedTask === i;
    };
  }]);

})();
