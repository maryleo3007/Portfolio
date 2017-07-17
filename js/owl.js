$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    navigation: false,
    margin: 10,
    dots: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    singleItem: true,
    lazyLoad:true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });
});
