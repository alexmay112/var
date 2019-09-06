$(function () {

  // new WOW().init();
  $(".table_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    touchMove: false,

    infinite: false,
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          touchMove: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          touchMove: false
        }
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          touchMove: false
        }
      }
    ]
  });
  $('.reviews-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    // variableWidth: true,
    adaptiveHeight: true,
    touchMove: false,
    infinite: true
  });

  $('.slider__right').on('click', function () {
    $('.reviews-inner').slick('slickPrev');

  });
  $('.slider__left').on('click', function () {
    $('.reviews-inner').slick('slickNext');

  });
  $('.review__file-trigger').on('click', function () {
    $('.answer__file').click();
  });
  $('.answer__file').on('change', function () {
    var name = $(this)[0].value.split('\\');
    var filesName = name[name.length - 1];
    alert('Ваш файл ' + filesName + ' загружен');

  });



  $('.reviews-inner').on('beforeChange', function () {
    $('.reviews-text').removeClass('active');
    $(".plus").removeClass('active');
  });

});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.menu').hide(); // close menu
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 29
  }, 1000);
});


// $('.fix__btn').click(function (e) {
//   var $message1 = $('.menu');

//   if ($message1.css('display') != 'block') {
//     $message1.show();
//     var firstClick = true;
//     $(document).bind('click.myEvent', function (e) {
//       if (!firstClick && $(e.target).closest('.menu').length == 0) {
//         $message1.hide();
//         $(document).unbind('click.myEvent');
//       }
//       firstClick = false;
//     });
//   }

//   e.preventDefault();
// });
/*=========================================*/
$(document).ready(function () {
  $('.consequences__list').slick({
    adaptiveHeight: true
  });
  $('.reviews__list').slick({});

  $('.reviews__more').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.reviews__item').toggleClass('reviews__item_expand');
    $(this).siblings('.review__text-wrapper').children('.reviews__text').toggleClass('reviews__text_expand');
    $(this).toggleClass('reviews__more_active')
  })
  $('.reviews__list').on('swipe', function (event, slick, direction) {
    console.log(direction);
    $('.reviews__item').removeClass('reviews__item_expand');
    $('.reviews__text').removeClass('reviews__text_expand');
    $('.reviews__more').removeClass('reviews__more_active');
  })
  $('.slick-arrow').on('click', function (e) {
    $('.reviews__item').removeClass('reviews__item_expand');
    $('.reviews__text').removeClass('reviews__text_expand');
    $('.reviews__more').removeClass('reviews__more_active');
  })

  $(".ever-popup-btn").click(function () {
    $('.menu').hide();
  });


  $('.fix__btn').click(function (e) {
    let message1 = $('.menu');
    if (message1.css('display') !== 'block') {
      message1.show();
    } else {
      message1.hide();
    }
    e.preventDefault();
  });


});