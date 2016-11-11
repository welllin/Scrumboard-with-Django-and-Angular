(function(){
  'use strict';

  angular.module('scrumboard.demo')
        .controller('LoginController', ['$scope', '$location', 'Login', LoginController]);

  function LoginController($scope, $location, Login) {
    $scope.login = function() {
      Login.post('/auth_api/login/', $scope.user)
          .then(function() {
            $location.url('/');
          }, function() {
            $scope.login_error = 'Invalid username/password combination'
          })
    }

    if (Login.isLogged()) {
      $location.url('/');
    }
  }

})();
