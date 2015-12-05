describe( 'A minimal toDo list', function() {
  it( 'has a title', function() {
    browser.get( 'http://localhost:9292' );
    expect( browser.getTitle() ).toEqual( 'A Minimal Todo List Built with AngularJS' );
  });
});
