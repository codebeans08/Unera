var swiper = new Swiper(".headerMarquee",
  {
    slidesPerView: 1.6,
    spaceBetween: 0 ,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 6000,
    allowTouchMove: false,
    breakpoints: {
      1600: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 10,
      },


      1024: {
        slidesPerView: 4.3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });


var tabs = Tabs({
  elem: "tabs",
  open: 0,
});

var tabs = Tabs({
  elem: "forYou",
  open: 0,
});

var tabs = Tabs({
  elem: "customDsign",
  open: 0,
});

var swiper = new Swiper(".brandslider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 6000,
  allowTouchMove: false,
  grabCursor: false,
  breakpoints: {
    1920: {
      slidesPerView: 6,
      spaceBetween: 100,
    },
  },
});

$(document).ready(function () {
  var categorySwiper = new Swiper(".categorySlider", {
    slidesPerView: 1.5,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      992: {
        slidesPerView: 4,
      },

    },
    effect: "slide",
  });
  var foryouSwiper = new Swiper("#foryouSlider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

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
  var foryouSwiper = new Swiper("#customerSlider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

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
        slidesPerView: 5,
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

  var foryouSwiper = new Swiper("#bdayColor", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,



    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 8,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      992: {
        slidesPerView: 7,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
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

// mouse hover play video
$(document).ready(function () {
  const $video = $(".custom-video");

  $video.on("mouseenter", function () {
    this.play();
  });

  $video.on("mouseleave", function () {
    this.pause();
    this.currentTime = 0;
    this.load();
  });
});

// color var
$(document).ready(function () {
  $(".for_you_product_item").each(function () {
    var $productItem = $(this);
    var $activeSwatch = $productItem.find(".swatch-label.is-active");
    if ($activeSwatch.length > 0) {
      var colorName = $activeSwatch.data("value");
      $productItem.find("[data-change-title]").text(" - " + colorName);
    }
  });

  $(".swatch-label").on("click", function () {
    var $productItem = $(this).closest(".for_you_product_item");
    $productItem.find(".swatch-label").removeClass("is-active");
    $(this).addClass("is-active");
    var colorName = $(this).data("value");
    $productItem.find("[data-change-title]").text(" - " + colorName);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiperGift", {
    slidesPerView: 1,
    spaceBetween: 24,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
});