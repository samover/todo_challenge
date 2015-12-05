describe( 'todoListController', function() {
  var ctrl,
  tasks = [
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

  beforeEach( module( 'todoList' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'todoListController' );
  }));

  it( 'initialises with an empty newTask and todoList', function() {
    expect( ctrl.newTask ).toBeUndefined();
    expect( ctrl.todoList ).toBeUndefined();
  });

  describe( 'Viewing existing tasks', function() {

    it( 'shows a list of existing tasks', function() {
      expect( ctrl.listTasks.items ).toEqual(tasks); 
    });
  });

  describe( 'Adding a new task' , function() {
    var tasks = [
      {
        'title': 'A todo item',
        'status': 0,
        'created_at': 1449322282417
      },
      {
        'title': 'A second todo item',
        'status': 1,
        'created_at': 1449322313457
      },
      {
        'title': 'A third todo item',
        'status': 1,
        'created_at': 1449323087596
      }
    ]

    var new_task = {
      'title': 'A third todo item',
      'status': 1,
      'created_at': 1449323087596
    };

    it( 'adds a new task to the existing ones', function() {
      ctrl.addTask(new_task);
      expect( ctrl.listTasks.items ).toEqual(tasks); 
    });
  });
});
