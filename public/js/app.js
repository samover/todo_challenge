(function() {
  var app = angular.module( 'todoList', [ 'ngResource' ] );

  app.controller( 'todoListController', [function() {
    var self = this,
      dataToStore;

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
      self.storeData();
    };

    self.storeData = function() {
      dataToStore = JSON.stringify( self.listTasks );
      localStorage.setItem( 'todoList', dataToStore );
    }

    self.activeTasks = function() {
      var tasks = self.listTasks.items, i, 
        count = 0;

      for( i = 0; i < tasks.length; i++) {
        if( tasks[i].status === 1 ) {
          count++;
        }
      }
      return count;
    }

  }]);

})();
