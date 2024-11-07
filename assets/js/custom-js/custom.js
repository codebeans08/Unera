var swiper = new Swiper(".headerMarquee", {
  slidesPerView: 8,
  spaceBetween: 24,
  loop: true,
  autoplay: true,
  speed: 6000,
  autoplay: {
    delay: 0,
  },
  allowTouchMove: false,
  disableOnInteraction: true,
});

var tabs = Tabs({
  elem: "tabs",
  open: 0,
});

var tabs = Tabs({
  elem: "forYou",
  open: 0,
});

var swiper = new Swiper(".brandslider", {
  slidesPerView: 6,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 6000,
  allowTouchMove: false,
  grabCursor: false,
});

$(document).ready(function () {
  var categorySwiper = new Swiper(".categorySlider", {
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
    },
    effect: "slide",
  });

  var foryouSwiper = new Swiper("#foryouSlider", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
    },
    effect: "slide",
  });
});

// HERO SLIDER
var menu = [];
jQuery(".heroSlider").each(function () {
  var dataText = jQuery(this).find(".slide-inner").attr("data-text");
  if (dataText) {
    menu.push(dataText);
  }
});

var interleaveOffset = 0.5;
var heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },

  on: {
    progress: function () {
      for (var i = 0; i < this.slides.length; i++) {
        var slideProgress = this.slides[i].progress;
        var innerOffset = this.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        var slideInner = this.slides[i].querySelector(".slide-inner");
        if (slideInner) {
          slideInner.style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      }
    },
    touchStart: function () {
      for (var i = 0; i < this.slides.length; i++) {
        this.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      for (var i = 0; i < this.slides.length; i++) {
        this.slides[i].style.transition = speed + "ms";
        var slideInner = this.slides[i].querySelector(".slide-inner");
        if (slideInner) {
          slideInner.style.transition = speed + "ms";
        }
      }
    },
  },
});

// DATA BACKGROUND IMAGE
jQuery(".slide-bg-image").each(function () {
  var background = jQuery(this).data("background");
  if (background) {
    jQuery(this).css("background-image", "url(" + background + ")");
  }
});

// Sticky fixed header
$(window).scroll(function () {
  if ($(window).scrollTop() >= 64) {
    $(".header").addClass("fixed-header");
  } else {
    $(".header").removeClass("fixed-header");
  }
});



// search box show hide 
$(document).ready(function () {
  $(".serch_sec").hide();

  $("#search_here").click(function () {
    $(".serch_sec").slideToggle();

  });
  $(".close_search_sec").click(function () {
    $(".serch_sec").slideUp();
  });
});
