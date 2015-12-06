describe( 'todoListController', function() {
  var ctrl, taskList, new_task, task;

  beforeEach( module( 'todoList' ));

  beforeEach( inject( function( $controller ){
    localStorage.clear();
    ctrl = $controller( 'todoListController' );
    taskList = [
      {
        'name': 'A todo item',
        'status': 1,
        'createdOn': 1449323087596
      }
    ];
  }));

  it( 'initialises with an empty newTask and todoList', function() {
    expect( ctrl.newTask ).toEqual({ });
    expect( ctrl.listTasks ).toEqual({ "items": [] });
  });

  describe( 'Adding a new task' , function() {
    it( 'adds a new task', function() {
      ctrl.newTask.name = 'A todo item';
      ctrl.newTask.status = 1;
      ctrl.newTask.createdOn = 1449323087596;
      ctrl.addTask();
      expect( ctrl.listTasks.items ).toEqual( taskList ); 
    });
  });

});
