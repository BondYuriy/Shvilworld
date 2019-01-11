$(document).ready(function() {
  $(".slider-1").owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      4000: {
        items: 1
      }
    }
  });
});

//===================================================

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

//==================================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//===================================================

$(".btn-toggle").click(function() {
  $(this)
    .next(".category-filter")
    .toggleClass("show");
});

//===================================================
