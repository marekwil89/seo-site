var landElements = [
  {
    elementClass: ".service",
    sectionClass: ".service-section",
    animationName: "slideInUp"
  },
  {
    elementClass: ".event",
    sectionClass: ".timeline-section",
    animationName: "slideInUp"
  },
  {
    elementClass: ".office-address",
    sectionClass: ".form-section",
    animationName: "slideInUp"
  },
  {
    elementClass: ".overlay-square",
    sectionClass: ".about-section",
    animationName: "moveSquare"
  }
]

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  for(var i = 0; i < landElements.length; i++){
    if($(landElements[i].sectionClass).length || $(landElements[i].elementClass).length){
      if(wScroll >= $(landElements[i].sectionClass).offset().top - ($(window).height()/3)){
        $(landElements[i].elementClass).each(function(index){
          var that = this;
          var animationName = landElements[i].animationName
          setTimeout(function(){
            $(that).addClass(animationName)
          }, 200 * index)
        });
      }
    }
  }
});