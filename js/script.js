$(document).ready(function () {

   $(".handle").click(function () {
      $(".navigation").toggleClass("show-navigation")
   })

   $(".owl-carousel").owlCarousel({
      loop: true,
      items: 2,
      smartSpeed: 700,
      navigation: true,
      remindNav: true,
      navText: ["<img src='img/arrleft.png'>","<img src='img/arrright.png'>"]
  });

})
