angular.module("routesModule", ['ngRoute'])

.config(function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('')

  // $locationProvider.html5Mode(true)

  $routeProvider.when('/strona-glowna', {
      templateUrl: 'app/components/main/main-page.html',
      controller: 'mainPageCtrl'
    });

  $routeProvider.when('/o-nas', {
      templateUrl: 'app/components/about/about.html',
      controller: 'aboutCtrl'
    });

  $routeProvider.when('/kontakt', {
      templateUrl: 'app/components/contact/contact.html',
      controller: 'contactCtrl'
    });

  $routeProvider.when('/uslugi', {
      templateUrl: 'app/components/services/services.html',
      controller: 'servicesCtrl'
    });

  $routeProvider.when('/usluga/:id', {
      templateUrl: 'app/components/services/service.html',
      controller: 'servicesCtrl'
    });

  $routeProvider.otherwise({
        redirectTo: '/strona-glowna'
    });
});