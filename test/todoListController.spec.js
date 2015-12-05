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

  describe('Editing a task', function() {
    beforeEach( function() {
      localStorage.clear();

      new_task = {
        'name': 'An edited todo item',
        'status': 1,
        'createdOn': 1449323087596
      };

      ctrl.newTask.name = 'A todo item';
      ctrl.newTask.status = 1;
      ctrl.newTask.createdOn = 1449323087596;
      ctrl.addTask();
    });

    it( 'edits the name of a task', function() {
      ctrl.listTasks.items[0].name = 'An edited todo item';
      ctrl.editTask();
      taskList = JSON.parse(localStorage.getItem('todoList'));      
      expect( taskList.items ).toEqual([ new_task ]);
    });

    it( 'marks a task as done', function() {
      ctrl.completeTask(0);
      expect(ctrl.listTasks.items[0].status).toEqual(0);
    });

    it( 'unmarks a task as done', function() {
      ctrl.completeTask(0);
      ctrl.completeTask(0);
      expect(ctrl.listTasks.items[0].status).toEqual(1);
    });
  });

});
