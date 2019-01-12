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

  $(".slider-2").owlCarousel({
    rtl: true,
    loop: true,
    margin: 29,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 4
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

$(".search-select").click(function() {
  $(this)
    .children(".search-icon")
    .toggleClass("flip");
});

//===================================================

$(".btn-toggle").click(function() {
  $(this)
    .next(".category-filter")
    .toggleClass("show");
});

//===================================================