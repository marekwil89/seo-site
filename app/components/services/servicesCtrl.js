angular.module("servicesModule", []).controller('servicesCtrl', function($scope, servicesList, $routeParams){

  var services = servicesList.getServices()
  var link = $routeParams.id

  $scope.service = services.find(function(item){
    return item.link === link
  });

})