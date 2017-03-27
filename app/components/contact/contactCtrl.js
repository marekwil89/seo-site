angular.module("contactModule", [])


.controller('contactCtrl', function($scope, NgMap){
  $scope.sendMessage = function(){
    alert('dupa')
  }

  $scope.markers = [
    {
      fullAddress: "Warszawa Pałac Kultury i Nauki", 
      city: "Warszawa",
      street: "Pałac Kultury i Nauki",
      zip: "05-077",
      phone: "505 737 246"
    },
    {
      fullAddress: "Wrocław Hotel. Jana Pawła", 
      city: "Wrocław",
      street: "Hotel. Jana Pawła",
      zip: "05-088",
      phone: "777 777 778"
    }
  ];


})