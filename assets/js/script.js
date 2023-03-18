'use strict';

/* ------------------------------- mobile menu start ------------------------------ */
let show = document.querySelector('.show');
let menuClose = document.querySelector('.menu-close');
let menuItem = document.querySelector('.menu-item');

function showMenu() {
    menuItem.style.opacity = "1";
    menuItem.style.visibility = "visible";
    menuItem.style.left = "0";
    menuItem.style.transition = "all .3s ease 0s";
    show.style.display = "none";
    menuClose.style.display = "block";
}
function hideMenu() {
    menuItem.style.opacity = "0";
    menuItem.style.visibility = "hidden";
    menuItem.style.left = "100%";
    menuItem.style.transition = "all .3s ease 0s";
    show.style.display = "block";
    menuClose.style.display = "none";
}
show.addEventListener('click', showMenu);
menuClose.addEventListener('click', hideMenu);


/* ------------------------------- mobile menu end ------------------------------ */


/* ---------------------------- footer menu start --------------------------- */
let up = document.querySelector('.up');
let down = document.querySelector('.down');
let footerNav = document.querySelector('.footer-nav');


function showFooter() {
    footerNav.style.display = 'block';
    up.style.display = 'block';
    down.style.display = 'none';
    
}

function hideFooter(){
    footerNav.style.display = 'none';
    up.style.display = 'none';
    down.style.display = 'block';
}

down.addEventListener('click', showFooter);
up.addEventListener('click', hideFooter);




/* ---------------------------- footer menu end --------------------------- */








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
}, 23);
// counter2
setInterval(() => {
    if(counter2 == 75) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2;
    }
}, 22);
// counter3
setInterval(() => {
    if(counter3 == 70) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3;
    }
}, 23);
// counter4
setInterval(() => {
    if(counter4 == 85) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4;
    }
}, 30);






















/* -------------------------------------------------------------------------- */
/*                              jquery Activation                             */
/* -------------------------------------------------------------------------- */

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
            768:{
                items:1
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


    // scroll up

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa-brands fa-space-awesome"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // wow js
    new WOW().init();








})





