angular.module('loaderDire', [])


.directive('loader', function($http, $timeout){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/loader/loader.html',
    link: function(scope, elm, attrs){
      scope.isLoading = function () {
          return $http.pendingRequests.length > 0;
      };

      scope.$watch(scope.isLoading, function (v){
        console.log(v)
          if(v){
              elm.show();
          }else{
            // $timeout(function(){
              elm.hide()
            // }, 1000) 
          }
      });
    }
  }
})