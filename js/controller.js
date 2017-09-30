// 보통 angular에서 컨트롤러를 사용할때는 첫문자를 대문자로
// scope은 컨트롤러와 뷰(html) 파일 간의 연결 고리 역할
// 뷰를 관리하는 역할
angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {

  $scope.todos = todoStorage.get();

  $scope.remove = function(todo) {
    todoStorage.remove(todo);
  };

  $scope.add = function(newTodoTitle) {
    todoStorage.add(newTodoTitle);
    $scope.newTodoTitle = "";
  };

  $scope.update = function() {
    todoStorage.update();
  };

});
