$(document).ready(function () {

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
  Tippy JS - https://atomiks.github.io/tippyjs/v6/getting-started/
  ========================================================================== */
  //revisar setContent https://atomiks.github.io/tippyjs/v6/methods/


  const developmentModalContentSpanish = document.getElementById('development-modal-content-spanish');
  const developmentModalContentEnglish = document.getElementById('development-modal-content-english');

  tippy('.tippy-development.spanish',{
    content: developmentModalContentSpanish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
  });

  tippy('.tippy-development.english',{
    content: developmentModalContentEnglish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
  });


  const photographyModalContentSpanish = document.getElementById('photography-modal-content-spanish');
  const photographyModalContentEnglish = document.getElementById('photography-modal-content-english');

  tippy('.tippy-photography.spanish',{
    content: photographyModalContentSpanish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
  });

  tippy('.tippy-photography.english',{
    content: photographyModalContentEnglish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
  });



    
});

