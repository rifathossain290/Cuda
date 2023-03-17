$(document).ready(function(){
    // slider active
    $('.slider-active').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            992:{
                items:1
            }
        }
    })

    // isotope
    let $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
    })

    $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });










})


/* progress chart functionality
------------------------------------- */

let number1 = document.querySelector('.number-1');
let number2 = document.querySelector('.number-2');
let number3 = document.querySelector('.number-3');
let number4 = document.querySelector('.number-4');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;


// counter1
setInterval(() => {
    if(counter1 == 90) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1;
    }
}, 20);
// counter2
setInterval(() => {
    if(counter2 == 75) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2;
    }
}, 27);
// counter3
setInterval(() => {
    if(counter3 == 70) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3;
    }
}, 25);
// counter4
setInterval(() => {
    if(counter4 == 85) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4;
    }
}, 21);



