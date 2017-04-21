angular.module("contactModule", [])

.controller('contactCtrl', function($scope, NgMap, $http, $timeout, $location, $sce){

  $scope.successMessage = ""

  $scope.message = {
    name: "Marek Wilczek",
    phone: "888888888",
    email: "marekwil89@gmail.com",
    siteUrl: "www.google.pl",
    text: "Cześć Piotr, sprawdzam czy mail działa"
  }


  $scope.sendMessage = function(message){
    //seosite3000///manta123///piotr@gabalewicz.pl
    var url = "https://script.google.com/macros/s/AKfycbwH5WebxZcG8rKDjTtgUBVFGKpZuK9RqYpSFJuyEZdP7xX_Oyw/exec"
    var message = "<h2>Autor " + message.name + " | " + message.email + "</h2>" + "<p>Napisał: " + message.text + "</p>" + "<p>Telefon: " + message.phone + "</p>" + "<p>Adres strony: " + message.siteUrl + "</p>"


    $http({
      method: 'POST',
      url: url,
      data: $.param({Message: message}),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })


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
      fullAddress: "Wrocław łukasiewicza 8 lok. 5", 
      city: "Wrocław",
      street: "łukasiewicza 8 lok. 5",
      zip: "50-371",
      phone: "662-056-143"
    },
    {
      fullAddress: "Warszawa Herbu Janina 3B", 
      city: "Warszawa",
      street: "Herbu Janina 3B",
      zip: "02-972"
    }
  ];
})