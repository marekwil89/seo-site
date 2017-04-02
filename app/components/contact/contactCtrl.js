angular.module("contactModule", [])


.controller('contactCtrl', function($scope, NgMap, $http){

  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

  $scope.sendMessage = function(message){

    var message = message.name + " <h2>napisał</h2> " + message.text;

    $http.post( 'https://script.google.com/macros/s/AKfycby-32X1AvMqBU0AQ0Av2BSBD6K9QOtWEjfchYI7zxZEDk9F-qdt/exec', message)
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