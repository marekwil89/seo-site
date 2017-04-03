angular.module("contactModule", [])

.controller('contactCtrl', function($scope, NgMap, $http, $timeout){

  $scope.successMessage = ""

  $scope.message = {
    name: "Marek Wilczekąąą",
    phone: "2131311",
    email: "marekwil89@gmail.com",
    siteUrl: "www.marekwil89.usermd.net",
    text: "my text"
  }


  $scope.sendMessage = function(message){

    var message = message.name + " <h2>napisał</h2> " + message.text;
    var url = "https://script.google.com/macros/s/AKfycby-32X1AvMqBU0AQ0Av2BSBD6K9QOtWEjfchYI7zxZEDk9F-qdt/exec"


    $http({
      method: 'POST',
      url: url,
      data: $.param({Message: message}),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })

    //$http.post( 'https://script.google.com/macros/s/AKfycby-32X1AvMqBU0AQ0Av2BSBD6K9QOtWEjfchYI7zxZEDk9F-qdt/exec', message)

    $scope.successMessage = '<i class="fa fa-spinner fa-spin fa-fw" aria-hidden="true"></i>'
    $timeout(function(){
      $scope.successMessage = '<p class="success-message">Wiadomość wysłana</p>'
      
      $scope.message = {
        name: "",
        phone: "",
        email: "",
        siteUrl: "",
        text: ""
      }
    },3000)
    
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