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

  it( 'adds a new task', function() {
    ctrl.newTask.name = 'A todo item';
    ctrl.newTask.status = 1;
    ctrl.newTask.createdOn = 1449323087596;
    ctrl.addTask();
    expect( ctrl.listTasks.items ).toEqual( taskList ); 
  });

  describe( 'number of tasks left', function() {

    it( 'shows no number of tasks left', function() {
      expect(ctrl.activeTasks()).toEqual(0);  
    });

    it( 'shows 2 tasks left', function() {
      ctrl.newTask.name = 'A todo item';
      ctrl.addTask();
      ctrl.newTask.name = 'A second todo item';
      ctrl.addTask();
      expect(ctrl.activeTasks()).toEqual(2);  
    });

    it( 'shows 1 task left if second task completed', function() {
      ctrl.newTask.name = 'A todo item';
      ctrl.addTask();
      ctrl.newTask.name = 'A second todo item';
      ctrl.addTask();
      ctrl.listTasks.items[0].status = 0;
      expect(ctrl.activeTasks()).toEqual(1);  
    });
  });

  describe( 'clear completed tasks', function() {
    beforeEach(function() { 
      ctrl.newTask.name = 'A todo item';
      ctrl.addTask();
      ctrl.newTask.name = 'A second todo item';
      ctrl.addTask();
    });

    it( 'has 2 tasks left with two active tasks before clearing', function() {
      ctrl.clearCompleted();
      expect(ctrl.listTasks.items.length).toEqual(2);  
    });

    it( 'has 1 task left with one active and one complete before clearing', function() {
      ctrl.listTasks.items[0].status = 0;
      ctrl.clearCompleted();
      expect(ctrl.listTasks.items.length).toEqual(1);  
    });

    it( 'has no tasks left with three completed tasks before clearing', function() {
      ctrl.newTask.name = 'A third todo item';
      ctrl.addTask();

      for( var i = 0; i < 3; i++ ) {
        ctrl.listTasks.items[i].status = 0;
      }

      ctrl.clearCompleted();
      expect(ctrl.listTasks.items.length).toEqual(0);  
    });
  });
});
