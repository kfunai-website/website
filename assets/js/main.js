if (window.matchMedia('screen and (max-width: 768px)').matches) {
  document.getElementById("lg").className = "logo_x";
}
else {
  document.getElementById("lg").className = "lg";
}
var i = 0;
var txt = {
  "text": ['KFUNAI', 'INFUNAI'],
  "text2": ['KERALA FORUM ON UNITED NATIONS ACADEMIC IMPACT', 'Indian National Forum in support of United Nations Academic Impact',],
  "text3": ['An independent \'NGO\' whose mission is to Promote United Nations Academic Impact in the State of Kerala and India', '']
};
/* The speed/duration of the effect in milliseconds */
count = 1
function typeWriter() {
  if (document.getElementById("trans").className == "trans")
    document.getElementById("trans").className = "t";
  else {
    document.getElementById("trans").className = "trans";
  }


  document.getElementById("text").innerHTML = txt["text"][count];
  document.getElementById("text2").innerHTML = txt["text2"][count];
  document.getElementById("text3").innerHTML = txt["text3"][count];


  if (count == 0) {
    count = 1;
    document.getElementById("text").style.color = "black";

  }
  else {
    count = 0;
    document.getElementById("text").style.color = "orange";
  }

}
setInterval(typeWriter, 5000);

(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $("[data-paroller-factor]").paroller()
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    // filter functions
    var $gallery = $(".gallery-wrapper");
    var filterFns = {};
    $gallery.isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: 0,
      }
    });
    // bind filter button click
    $('ul.filter').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $gallery.isotope({
        filter: filterValue
      });
    });
    // change is-checked class on buttons
    $('ul.filter').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li', function () {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  });
  $(document).ready(function () {
    // Nice Select
    $('.select-bar').niceSelect();
    // Lightcase 
    $('a[data-rel^=lightcase]').lightcase();
    // Wow js active
    new WOW().init();
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //MenuBar
    $('.header-bar').on('click', function () {
      $(".menu").toggleClass("active");
      $(".header-bar").toggleClass("active");
      $('.overlay').toggleClass('active');
    });
    $('.search-button').on('click', function () {
      $('.search-form').toggleClass('active');
      $('.overlay').addClass('active');
    });
    $('.overlay').on('click', function () {
      $(this).removeClass('active')
      $(".menu").removeClass("active");
      $(".header-bar").removeClass("active");
      $('.search-form').removeClass('active');
    })
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // Header Sticky Here
    // Header Sticky Here
    var header = $(".header-section, .header-fix");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });
    //Tab Section
    $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(150);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').show(150);
      g.preventDefault();
    });
    $('.prev-but, .next-but').on('click', function () {
      $('.next-but, .prev-but').removeClass('active');
      $(this).addClass('active');
    })
    //Odometer
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    $(".team-icon>i").parent(".team-icon").removeClass("team-icon");
    $(".gallery-icon>i").parent(".gallery-icon").removeClass("gallery-icon");
    var swiper = new Swiper('.sponsor-slider', {
      slidesPerView: 4,
      loop: true,
      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
      }
    });
    var swiper = new Swiper('.client-slider', {
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 2000,
      },
    });
    var swiper = new Swiper('.client-slider-rat', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1500,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },
      },
    });
    var swiper = new Swiper('.client-slider-area', {
      loop: true,
      slidesPerView: 3,
      autoplay: {
        delay: 1500,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },
      },
    });
    var swiper = new Swiper('.choose-slider', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 1,
        },
      },
    });
    //privacy left side menu
    $('.privacy-sidebar li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
  });
})(jQuery);
