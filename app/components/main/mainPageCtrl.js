angular.module("mainPageModule", [])

.controller('mainPageCtrl', function($scope, anchorSmoothScroll, $location, servicesList){

  $scope.services = servicesList.getServices()


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
  }

  $scope.gotoElement = function (eID){
    $location.hash('bottom');
    anchorSmoothScroll.scrollTo(eID);
    $location.url($location.path());
  };
})

.service('servicesList', function(){
  this.servicesList = [
    {
      link: 'audyt',
      title: 'Audyt dotychczasowej pozycji w wyszukiwarce',
      text: 'Nie jesteś pewien skuteczności swoich obecnych działań lub zauważyłeś spadek w wynikach wyszukiwania? Spokojnie, zbadamy to dla Ciebie i wyróżnimy wszystkie niepokojące czynniki, które miały na to wpływ.'
    },
    {
      link: 'szkolenia',
      title: 'Prywatne konsultacja i szkolenia z SEO',
      text: 'Chcesz poznać techniki SEO i w przyszłości sam wpływać na Twoją pozycję w wyszukiwarce? Sprawdź, jakie szkolenia dla Ciebie przygotowaliśmy lub zarezerwuj prywatna konsultację, aby omówić nie jasne dla Ciebie kwestie.'
    },
    {
      link: 'pozycjonowanie',
      title: 'Pozycjonowanie Long Tail',
      text: 'Wykorzystaj pomysłowość Twoich potencjalnych Klientów zestawiających ze sobą różne frazy w zapytaniu. Odpowiednio przeprowadzone pozycjonowanie typu Long Tail zapewni Ci długotrwałą, wysoką pozycję w wyszukiwarce.'
    },
    {
      link: 'google',
      title: 'Usuwanie filtra w Google',
      text: 'Jeżeli w ostatnim czasie Twoja strona odnotowała znacząco mniejszy ruch to prawdopodobniej Google nałożył na nią karę. Nie ma sposób na obejście jej, ale z naszą pomocą, pozbędziesz się elementów za to odpowiedzialnych.'
    }
  ];

  this.getServices = function(){
    return this.servicesList;
  };
})

.service('anchorSmoothScroll', function(){
    
   this.scrollTo = function(eID) {
        
      var startY = currentYPosition();
      var stopY = elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
          scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 50);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
          for ( var i=startY; i<stopY; i+=step ) {
              setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
              leapY += step; if (leapY > stopY) leapY = stopY; timer++;
          } return;
      }
      for ( var i=startY; i>stopY; i-=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }

      function currentYPosition() {
          if (self.pageYOffset) return self.pageYOffset;
          if (document.documentElement && document.documentElement.scrollTop)
              return document.documentElement.scrollTop;
          if (document.body.scrollTop) return document.body.scrollTop;
          return 0;
      }

      function elmYPosition(eID) {
          var elm = document.getElementById(eID);
          var y = elm.offsetTop;
          var node = elm;
          while (node.offsetParent && node.offsetParent != document.body) {
              node = node.offsetParent;
              y += node.offsetTop;
          } return y;
      }
    };  
});
