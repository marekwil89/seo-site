angular.module("contactModule", [])

.controller('contactCtrl', function($scope, NgMap, $http, $timeout, $location){

  $scope.successMessage = ""

  $scope.message = {
    name: "",
    phone: "",
    email: "",
    siteUrl: "",
    text: ""
  }


  $scope.sendMessage = function(message){

    // var message = message.name + " <h2>napisał</h2> " + message.text;
    var message = "<h2>Autor " + message.name + " | " + message.email + "</h2>" + "<p>Napisał: " + message.text + "</p>" + "<p>Telefon: " + message.phone + "</p>" + "<p>Adres strony: " + message.siteUrl + "</p>" 
    var url = "https://script.google.com/macros/s/AKfycby-32X1AvMqBU0AQ0Av2BSBD6K9QOtWEjfchYI7zxZEDk9F-qdt/exec"
    console.log(message)

    $http({
      method: 'POST',
      url: url,
      data: $.param({Wiadomość: message}),
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
    $location.url($location.path());
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