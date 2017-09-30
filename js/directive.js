angular.module('todo').directive("todoTitle", function() {

  return {template: '<h1>투 두 목 록</h1>'}

});

angular.module('todo').directive('todoItem', function(){

    return {

      // ajax call을 막아놨기 때문에 사용할 수 없습니다. $npm install http-server
      // templateUrl: 'todoItem.tpl.html'
      template:
          '<div class="input-group">' +
            '<span class="input-group-addon">' +
                '<input type="checkbox" ng-model="todo.completed" ng-click="update()" >' +
            '</span>' +
            '<input type="text" class="form-control" ng-model="todo.title" ng-blur="update()" >' +
            '<span class="input-group-btn">' +
              '<button class="btn btn-danger" type="button" ng-click="remove(todo)">삭 제</button>' +
            '</span>' +
          '</div>' +
        '<date>{{ todo.createAt | date:\'yyyy-mm-dd HH:mm:ss\'}}</date>'
      }

});

angular.module('todo').directive('todoFilters', function(){
    return {
      template:
        '<button class="btn btn-primary" ng-click="statusFilter={completed:true}">Completed</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={completed:false}">Active</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={}">All</button>'
    }
});


angular.module('todo').directive('todoForm', function(){
    return {
      template:
          '<form name="todoForm" ng-submit="add(newTodoTitle)">' +
            '<div class="input-group">' +
              '<input type="text" class="form-control" ng-model="newTodoTitle" placeholder="새로운 투두를 입력하세요..." autofocus minlength="3" />' +
              '<span class="input-group-btn">' +
                '<button class="btn btn-success" type="submit">추 가</button>' +
                '</span>' +
            '</div>' +
            '<div ng-show="todoForm.$dirty && todoForm.$invalid">' +
              '<div class="alert alert-warning" role="alert">3글자 이상 입력하세요.</div>' +
            '</div>' +
          '</form>'
    }
});
