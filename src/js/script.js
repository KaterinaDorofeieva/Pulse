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
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 1
      }
    }
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

    
