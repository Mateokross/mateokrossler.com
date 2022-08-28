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


  const photographyModalContent = document.getElementById('photography-modal-content');

  tippy('.tippy-photography',{
    content: photographyModalContent.innerHTML,
    allowHTML: true,
    placement: 'bottom',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
    offset: [0, 20],
  });

  console.log("test")



    
});

