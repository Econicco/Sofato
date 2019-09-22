
 /*------------------------------------------------------- 
  [JS Index]
  Template: Rambo - Creative Portfolio HTML5 Template
  Template URL: http://rambo.com
  Author:  design_grid
  Version: 1.0
-----------------------------------------------------------*/

(function($) {
    "use strict";

 /*------------------------------------------------------- 
                    Variables
-------------------------------------------------------*/
    var wind = $(window);
    var oheight = $('.footer-fixed').outerHeight();

/* ---------------------------------------------------
           Scroll To Top Then Fixed Navigation
-------------------------------------------------------*/
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('nav-fixed');
    }
    else {
      $('nav').removeClass('nav-fixed');
    }
 });
});

    /* sections background image from data background
    -------------------------------------------------------*/
    var cover = $(".cover-bg, section");
    cover.each(function() {
        var attr = $(this).attr('data-image-src');

        if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'url('+attr+')');
        }

    });
/* ---------------------------------------------------
                preloader
 -------------------------------------------------------*/
 jQuery(window).load('body', function(){
  setTimeout(function(){
      jQuery('.preloader').addClass('loaded');
  }, 100);
});

 /*------------------------------------------------------- 
                        progress bar
  -------------------------------------------------------*/
    wind.on('scroll', function () {
        $(".bar span").each(function () {
            var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-width');
            if(bottom_of_window > bottom_of_object) {
            $(this).css({
                width : myVal
            });
            }
        });
    });
 /*------------------------------------------------------- 
     Owl Caroursel team
    -------------------------------------------------------*/
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
 /*------------------------------------------------------- 
                  carousel testimonial
    -------------------------------------------------------*/
    var swiper = new Swiper('.testimonial .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      },
    });

/* ---------------------------------------------------
                 Counter
-------------------------------------------------------*/
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});

/*-------------------------------------------------
                          YouTubePopUp
 -------------------------------------------------------*/
    $("a.vid").YouTubePopUp();

/* ---------------------------------------------------
                 Typed
-------------------------------------------------------*/
  var typed = new Typed(".Typed",{
    strings: [
    "Web Designer",
    "Web Developer",
    "Freelancer"
    ],
    typeSpeed:60,
    backSpeed:60,
   loop:true
  });
/* ---------------------------------------------------
                 WOW
-------------------------------------------------------*/
new WOW().init();

/* ---------------------------------------------------
                Smooth Scroll 
-------------------------------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]',{
  speed:800
});

/* ---------------------------------------------------
                   End jquery
-------------------------------------------------------*/
})(jQuery);


