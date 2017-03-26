angular.module("mainPageModule", []).controller('mainPageCtrl', function($scope){


  $scope.resizePanel = function(event){
    var currentElem = angular.element(event.currentTarget)


    if(currentElem.parent().hasClass('resize')){
      currentElem.removeClass('open')
      currentElem.prev('.panel-info').removeClass('show');
      return currentElem.parent().removeClass('resize')
    }
    currentElem.parent().siblings().removeClass('resize');
    currentElem.addClass('open')
    currentElem.prev('.panel-info').addClass('show');
    currentElem.parent().addClass('resize');

    console.log(angular.element(event.currentTarget).parent().hasClass('resize'))
  }



})