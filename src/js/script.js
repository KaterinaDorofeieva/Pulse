/* if (2 * 6 == 8 * 1) {
    console.log("True")
} else {
    console.log("False")
}

let answer = confirm("Вам есть 18?")
if (answer) {
    console.log('Welcome')
} else {
    console.log ('Go')
} */

/* for (let i = 1; i < 8; i++){
    console.log(i);
} */
/* 
$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      //adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left_solid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right_solid.svg"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }   
      ]
    });
}); */

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  speed: 1200,
  responsive: {
    1200: {
      nav: false,
    },
    992: {
      nav: true
    }
  }
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev')
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next')
});
/*
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});*/
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
};
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//modal

$('[data-modal="consultation"]').on('click', function () {
  $('.overlay, #consultation').fadeIn('fast');
});
$('.modal__close').on('click', function (){
  $('.overlay, #consultation, #thank, #order').fadeOut();
});

$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn();
  });
});

function valideForms(form){
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Вкажіть Ваше ім'я",
        minlength: jQuery.validator.format("Вкажіть від {0} символів!")
      },
      phone: {
        required: "Вкажіть Ваш номер телефону",
      },
      email: {
        required: "Вкажіть Вашу почту",
        email: "Неправильний адрес почти"
      }
    }
  });    
};

valideForms('#consultation form');
valideForms('#order form');
valideForms('#consultation-form');

$('input[name=phone]').mask("+(380) 99-999-99-99");

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanku').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1600){
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

new WOW().init();