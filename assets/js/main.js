$(document).ready(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // for top scroll
          if (scroll >= 10) {
            $(".site-header").addClass("sticky");
        }
        if (scroll <= 0) {
            $(".site-header").removeClass("sticky");
        }
    });

    // Scrollup
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  
   

});

