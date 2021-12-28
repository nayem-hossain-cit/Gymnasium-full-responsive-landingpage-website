$(document).ready(function(){
    'use strict';

    // color picker click;
    $('.color-picker .color-btn').on('click',function(){
        $('.color-picker').toggleClass('color-pos');
    });

    // color picker change;
    $('.color-picker ul .orange').on('click',function(){
        $('body').addClass('orange').removeClass('green').removeClass('blue');
    });

    $('.color-picker ul .green').on('click',function(){
        $('body').addClass('green').removeClass('blue').removeClass('orange');
    });

    $('.color-picker ul .blue').on('click',function(){
        $('body').addClass('blue').removeClass('orange').removeClass('green');
    });

    $('.color-picker ul .defult').on('click',function(){
        $('body').removeClass('blue').removeClass('orange').removeClass('green');
    });


    // back-top button show;
    $(window).on('scroll',function(){
      var scrolling = $(this).scrollTop();
      // back-top btn
      if(scrolling > 200){
          $('.bc-tp-btn').fadeIn();
      }else{
          $('.bc-tp-btn').fadeOut();
      }

      // navbar fixed
      if(scrolling > 200){
          $('.navbg').addClass('navbar-fixed');
      }else{
          $('.navbg').removeClass('navbar-fixed');
      };
  });

  // back-top click;
  $('.bc-tp-btn').on('click',function(){
      $('body,html').animate({
          scrollTop: '0',
      },1000);
  });

    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    //about video pop up & gallery image pop up;
    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#e23e38',
    });

    //testimonial slider;
    $('.testi-slider').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });

    //funfact counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });

    //brand slider;
    $('.brand-slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
              }
            },
        ]
    });


});