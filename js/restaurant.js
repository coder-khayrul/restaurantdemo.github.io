
// header active
let headerBtn = $(".navbar-nav .nav-item .nav-link");
headerBtn.click(function () {
    headerBtn.addClass("activeButton")
    console.log("i'm  activeButton");
})


// swiper js script

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//------------------------------------------------------


// owl-carousel script

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

//-------------------------------------------------------

//bottom to top button declared here

$("body").toTopButton({});

//----------------------------------------------------

//aos animation declared here
AOS.init();
//------------------------------------

// lightbox plugin script here
var gallery = new SimpleLightbox('.gallery a', {

    /* options */

  });

// mixitup scrpt here
var mixer = mixitup('.mixitup_section');