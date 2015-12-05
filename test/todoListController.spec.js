describe( 'todoListController', function() {
  var ctrl;

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
        }
      ]

      expect( ctrl.listTasks.items ).toEqual(tasks); 
    });
  });
});
