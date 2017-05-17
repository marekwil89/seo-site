angular.module("servicesModule", []).controller('servicesCtrl', function($scope, servicesList, $routeParams){
  $scope.services = servicesList.getServices()
  var link = $routeParams.id

  $scope.service = $scope.services.find(function(item){
    return item.link === link
  });

})