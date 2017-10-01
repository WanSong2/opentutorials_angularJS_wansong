angular.module('todo').factory('todoStorage', function() {

  //대문자로 표현하면 상수다 관습
  var TODO_DATA = 'TODO_DATA';

  var storage = {
    // 로컬 storage에 저장
    todos: [],

    // 내부에서만 사용 가능하도록 _ 붙임 (컨트롤러에서 사용못함 services에서만 사용하도록 의미) 관습
    _saveToLocalStorage: function(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },

    // 내부에서만 사용 가능하도록 _ 붙임 (컨트롤러에서 사용못함 services에서만 사용하도록 의미) 관습
    _getFromLocalStorage: function() {
      // 없을 경우에 빈 배열을 반환해라
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },

    get: function() {
      // storage.todos = stroage._getFromLocalStorage();
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },

    remove: function(todo) {
      var idx = storage.todos.findIndex(function(item) {
        return item.id === todo.id;
      });

      if (idx > -1) {
        storage.todos.splice(idx, 1);
        storage._saveToLocalStorage(storage.todos);
      };
    },

    add: function(newTodoTitle) {
      //alert(newTodoTitle);
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createAt: Date.now()
      };

      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },

    update: function() {
      storage._saveToLocalStorage(storage.todos);
    }

  }

  return storage;
});
