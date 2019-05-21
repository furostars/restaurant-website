//jshint esversion:6

$(document).ready(function() {
  //toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });
  //sticky navbar less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");

    }
  });

  //back to top
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });



  //ripples
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,
  });

  //magnific popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
      // options for gallery
      enabled: true
    }
    // other options

  });

});
