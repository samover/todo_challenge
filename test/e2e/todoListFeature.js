describe( 'A minimal toDo list', function() {
  var newTask, addTask, newItem;

  beforeEach(function() {
    browser.get( 'http://localhost:9292' );
  });

  it( 'has a title', function() {
    expect( browser.getTitle() ).toEqual( 'A Minimal Todo List Built with AngularJS' );
  });

  describe( 'Adding and editing a task', function() {
    beforeEach(function() {
      newTask = browser.findElement(by.model('listCtrl.newTask.name'));
      addTask = browser.findElement(by.buttonText('Add new task'));
      newTask.sendKeys( 'A new task to do' );
      addTask.click();
    });

    afterEach(function() {
      browser.executeScript('localStorage.clear();');
    });

    it( 'adds a a new task', function() {
      newItem = browser.findElement(by.className('readable'));
      expect(newItem.getAttribute('value')).toEqual( 'A new task to do' );
    });

    it ('edits ane existing task', function() {
      newItem = browser.findElement(by.className('readable'));
      newItem.click();
      newItem = browser.findElement(by.className('editable'))
      newItem.clear();
      newItem.sendKeys( 'An edited task' );
      newTask.click();
      expect(element(by.className('editable')).isPresent()).toBeFalsy();
      newItem = browser.findElement(by.className('readable'));
      expect(newItem.getAttribute('value')).toEqual( 'An edited task' );
    });
  });

});
