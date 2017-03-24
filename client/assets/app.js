var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/new_users.html',
    controller: 'UsersController as UC'
  })
  .when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'UsersController as UC'
  })
  .when('/create', {
    templateUrl: 'partials/newsurvey.html',
    controller: 'SurveysController as SC'
  })
  .when('/survey/:id', {
    templateUrl: 'partials/survey.html',
    controller: 'SurveysController as SC'
  })
  .otherwise('/')
})
