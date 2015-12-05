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
});
