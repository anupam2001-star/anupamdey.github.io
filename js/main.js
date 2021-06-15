jQuery(document).ready(function () {

   var logo = $('#logo');
   if (location.href.indexOf("#") != -1) {
      logo.show();
   }

   $('.menu .tabs a').click(function () {
      logo.fadeIn();
   });

   $('.tab-profile').click(function () {
      logo.fadeOut();
   });

   $('#yellow-color').click(function () {
      $('.main-wrapper-resume').attr("id", "yellow");
   });
   $('#red-color').click(function () {
      $('.main-wrapper-resume').attr("id", "red");
   });
   $('#blue-color').click(function () {
      $('.main-wrapper-resume').attr("id", "blue");
   });
   $('#green-color').click(function () {
      $('.main-wrapper-resume').attr("id", "green");
   });

   $('#setting-icon').click(function () {
      $('.color-box').toggleClass('main');
   });

   $('.cats-filter').find(".a").click(function () {
      $(this).attr("data-filter");
      $(this).parent().parent().find(".a").removeClass('.current');
      $(this).addClass('current');
   });

   $('#portfolio-list').isotope({
      filter: '*',
      layoutMode: 'masonry',
      animationOptions: {
         duration: 750,
         easing: 'linear'
      }
   });
   $('#portfolio-filter').find('a').click(function () {
      var selector = $(this).attr('data-filter');
      $('#portfolio-list').isotope({
         filter: selector,
         animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
         }
      });
      return false;
   });


   var $content = $("#content");

   // Run easytabs
   $content.easytabs({
      animate: true,
      updateHash: false,
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      animationSpeed: 600,
      tabs: ".tmenu",
      tabActiveClass: 'active',
   });


   // Hover menu effect
   $content.find('.tabs li a').hover(
      function () {
         $(this).stop().animate({ marginTop: "-7px" }, 200);
      }, function () {
         $(this).stop().animate({ marginTop: "0px" }, 300);
      }
   );

});
