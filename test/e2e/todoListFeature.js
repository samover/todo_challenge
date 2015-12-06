describe( 'A minimal toDo list', function() {
  var newTask, addTask, newItem, tickComplete, viewAll, viewActive, viewCompleted;

  beforeEach(function() {
    browser.get( 'http://localhost:9292' );
  });

  xit( 'has a title', function() {
    expect( browser.getTitle() ).toEqual( 'A Minimal Todo List Built with AngularJS' );
  });

  describe( 'Adding and editing a task', function() {
    beforeEach(function() {
      newTask = browser.findElement(by.model('listCtrl.newTask.name'));
      addTask = browser.findElement(by.buttonText('Add new task'));
      newTask.sendKeys( 'A new task to do' );
      addTask.click();
      newItem = browser.findElement(by.className('readable'));
      tickComplete = element(by.model( 'task.status' ));
    });

    afterEach(function() {
      browser.executeScript('localStorage.clear();');
    });

    xit( 'adds a a new task', function() {
      expect(newItem.getAttribute('value')).toEqual( 'A new task to do' );
    });

    it('edits an existing task', function() {
      newItem.click();
      newItem = browser.findElement(by.className('editable'))
      newItem.clear();
      newItem.sendKeys( 'An edited task' );
      newTask.click();
      expect(element(by.className('editable')).isPresent()).toBeFalsy();
      newItem = browser.findElement(by.className('readable'));
      expect(newItem.getAttribute('value')).toEqual( 'An edited task' );
    });

    xit( 'is not marked as done', function() {
      expect(tickComplete.isSelected()).toBe(false);
      expect(newItem.getCssValue('text-decoration')).toEqual('none');
    });

    it( 'marks an existing task as done', function() {
      tickComplete.click();
      expect(tickComplete.isSelected()).toBe(true);
      expect(newItem.getCssValue('text-decoration')).toEqual('line-through');
    });
  });

  describe( 'Viewing and filtering tasks', function() {
    beforeEach(function() {
      newTask = browser.findElement(by.model('listCtrl.newTask.name'));
      addTask = browser.findElement(by.buttonText('Add new task'));
      viewAll = browser.findElement(by.buttonText('All'));
      viewActive = browser.findElement(by.buttonText('Active'));
      viewCompleted = browser.findElement(by.buttonText('Complete'));
      
      newTask.sendKeys( 'A new task to do' );
      addTask.click();
      newTask.sendKeys( 'Another task to do' );
      addTask.click();
      newTask.sendKeys( 'Third and last task ');
      addTask.click();
       
      tickComplete = element.all(by.model( 'task.status' )).first().click();
    });

    afterEach(function() {
      browser.executeScript('localStorage.clear();');
    });

    xit( 'can show only tasks that are active', function() {
      viewActive.click();
      expect(element.all(by.className('inputTask')).count()).toEqual(2);
    });

    xit( 'can show only tasks that are completed', function() {
      viewCompleted.click();
      expect(element.all(by.className('inputTask')).count()).toEqual(1);
    });

    xit( 'can show all tasks, completed and active', function() {
      viewAll.click();
      expect(element.all(by.className('inputTask')).count()).toEqual(3);
    });
  });

  describe( 'Showing number of tasks', function() {
    beforeEach(function() {
      newTask = browser.findElement(by.model('listCtrl.newTask.name'));
      addTask = browser.findElement(by.buttonText('Add new task'));
      viewAll = browser.findElement(by.buttonText('All'));
      viewActive = browser.findElement(by.buttonText('Active'));
      viewCompleted = browser.findElement(by.buttonText('Complete'));
      taskCount = browser.findElement(by.css('#itemsLeftCount'));
      //newTask.sendKeys( 'A new task to do' );
      //addTask.click();
      //newTask.sendKeys( 'Another task to do' );
      //addTask.click();
      //newTask.sendKeys( 'Third and last task ');
      //addTask.click();
       
      //tickComplete = element.all(by.model( 'task.status' )).first().click();
    });

    it( 'shows 0 of active tasks left if no tasks given', function() {
      expect(taskCount.getText()).toEqual('No items left');
    });

    it( 'shows 1 item left if 1 active task is given', function() {
      newTask.sendKeys( 'A new task to do' );
      addTask.click();
      expect(taskCount.getText()).toEqual('1 item left');
    });

    it( 'shows 2 items left if 2 active tasks are given', function() {
      newTask.sendKeys( 'A new task to do' );
      addTask.click();
      newTask.sendKeys( 'Another task to do' );
      addTask.click();
      expect(taskCount.getText()).toEqual('2 items left');
    });
  });

});
