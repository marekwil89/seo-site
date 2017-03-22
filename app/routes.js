angular.module("routesModule", ['ngRoute'])

.config(function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('')

  $routeProvider.when('/main-page', {
      templateUrl: 'app/components/main/main-page.html',
      controller: 'mainPageCtrl'
    });

  $routeProvider.when('/about', {
      templateUrl: 'app/components/about/about.html',
      controller: 'aboutCtrl'
    });

  $routeProvider.when('/contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: 'contactCtrl'
    });

  $routeProvider.otherwise({
        redirectTo: '/main-page'
    });
});