$(document).ready(function () {

/* ==========================================================================
  AOS - https://michalsnik.github.io/aos/
  ========================================================================== */
  // if(window.innerWidth >= 991){
  //   AOS.init({
  //       offset: 300,
  //       delay: 200,
  //       duration: 1800,
  //       once: true
  //     });
  // }

  /* ==========================================================================
  Slider - https://splidejs.com/documents/
  ========================================================================== */
  //lo inicializo en página de desarrollo
  if($("#splide-eventos").length){
    new Splide( "#splide-eventos", {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      lazyLoad: 'sequential',
      pagination: false,
      padding: 0,
      start: 0
    }).mount();
  }
/* ==========================================================================
  Materialize - https://materializecss.com/
  ========================================================================== */
    $('.sidenav').sidenav({
        edge: 'right'
    });


/* ==========================================================================
  TypewriterJS v2 - https://github.com/tameemsafi/typewriterjs
  ========================================================================== */

  //Si estoy en la página index, inicializo el typewriter

  if($(".hero h4.spanish").length){
    new Typewriter('.hero h4.spanish', {
      strings: ['Lic. en Administración y Sistemas del ITBA', 'Analista de Producto en Kavak'],
      autoStart: true,
      cursor:"",
      delay: 15,
      deleteSpeed: 30,
      loop: true,
      pauseFor: 2500
    });
  
    new Typewriter('.hero h4.english', {
      strings: ['Business and Tech graduate from ITBA', 'Product Analyst at Kavak'],
      autoStart: true,
      cursor:"",
      delay: 15,
      deleteSpeed: 30,
      loop: true,
      pauseFor: 2500
    });
  }



    
});

