$(document).ready(function () {


/* ==========================================================================
  AOS - https://michalsnik.github.io/aos/
  ========================================================================== */
  if(window.innerWidth >= 991){
    AOS.init({
        offset: 300,
        delay: 200,
        duration: 1800,
        once: true
      });
  }


/* ==========================================================================
  Otros 
  ========================================================================== */
    $('.sidenav').sidenav({
        edge: 'right'
    });

    $('.materialboxed').materialbox();
    // $('#carousel-eventos').carousel({
    //     dist: -130,
    //     numVisible: 3
    // });
    $('#carousel-agrorrhh').carousel({
        dist: -130,
        numVisible: 3
    });
    $('#carousel-others').carousel({
        dist: -30,
        numVisible: 3
    });

    new Splide( '#splide-eventos', {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        lazyLoad: 'sequential',
        pagination: false,
        padding: 0,
    }).mount();

    new Splide( '#splide-agrorrhh', {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        lazyLoad: 'sequential',
        width:1500,
        heightRatio: 0.3333,
        perPage:3,
        focus    : 'center',
        trimSpace: false,
        arrows: false,
        pagination: false,
        gap: '1em',
        breakpoints: {
            1700: {
                width:900,
                heightRatio: 1,
                perPage: 1,
                heightRatio: 1,
                gap: '0px',
                padding: 200,
            },
            820: {
                perPage: 1,
                heightRatio: 1,
                gap: '0px',
                padding: 35,
            },
        }
    }).mount();
});