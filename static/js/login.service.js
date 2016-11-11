(function(){
  'use strict';

  angular.module('scrumboard.demo')
        .service('Login', ['$http', '$location', Login]);

  function Login($http, $location) {
    this.login = login;
    this.isLogged = isLogged;
    this.logout = logout;
    this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;

    function login(credentials) {
      return $http.post('/auth_api/login/', credentials)
            .then(function(response) {
              localStorage.currentUser = JSON.stringify(response.data);
            })
    }

    function isLogged() {
      return !!localStorage.currentUser;
    }

    function logout() {
      delete localStorage.currentUser;
      $http.get('/auth_api/logout/').then(function(){
        $location.url('/login');
      })
    }

    function redirectIfNotLoggedIn() {
      if (!isLogged()) {
        $location.url('/login');
      }
    }
  }

})();
