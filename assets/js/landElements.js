var landElements = [
  {
    elementClass: ".service",
    sectionClass: ".services-section",
    animationName: "slideInUp"
  },
  {
    elementClass: ".overlay-square",
    sectionClass: ".team-section",
    animationName: "moveSquare"
  },
  {
    elementClass: ".overlay-shape",
    sectionClass: ".chart-section",
    animationName: "moveShape"
  },
  {
    elementClass: ".overlay-rectangle",
    sectionClass: ".form-section",
    animationName: "moveRectangle"
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