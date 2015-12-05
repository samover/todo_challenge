(function() {
  var app = angular.module( 'todoList', [ 'ngResource' ] );

  app.controller( 'todoListController', [ function() {
    var self = this; 

    self.listTasks = {
      "items": [
        {
          'title': 'A todo item',
          'status': 0,
          'created_at': 1449322282417
        },
        {
          'title': 'A second todo item',
          'status': 1,
          'created_at': 1449322313457
        }
      ]
    };

  }]);

})();
