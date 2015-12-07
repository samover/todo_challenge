app.directive( 'todoForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/todo-form.html'
  }
});

app.directive( 'todoList', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/todo-list.html'
  }
});

app.directive( 'todoFilters', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/todo-filters.html'
  }
});

app.directive( 'todoCount', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/todo-count.html'
  }
});

app.directive( 'todoFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/todo-footer.html'
  }
});

