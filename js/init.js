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

  //Email tooltip for email links that don't work
  // Use a counter variable to keep track of the number of times the element is clicked
  let emailLinkClickCount = 0;
  
  $('.tippy-email').on('click', function() {
    emailLinkClickCount++;
    if (emailLinkClickCount === 2) {
      const emailModal = tippy('.tippy-email.spanish',{
        content: document.getElementById('email-modal-content').innerHTML,
        placement: 'bottom',
        allowHTML: true,
        theme: 'mateo',
        interactive: true,
        popperOptions: {
          strategy: 'fixed',
        },
      })[0].show();
    }
  });


  const developmentModalContentSpanish = document.getElementById('development-modal-content-spanish');
  const developmentModalContentEnglish = document.getElementById('development-modal-content-english');

  tippy('.tippy-development.spanish',{
    content: developmentModalContentSpanish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
    popperOptions: {
      strategy: 'fixed',
    },
  });

  tippy('.tippy-development.english',{
    content: developmentModalContentEnglish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
    popperOptions: {
      strategy: 'fixed',
    },
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
    popperOptions: {
      strategy: 'fixed',
    },
  });

  tippy('.tippy-photography.english',{
    content: photographyModalContentEnglish.innerHTML,
    allowHTML: true,
    placement: 'right',
    theme: 'mateo',
    interactive: true,
    maxWidth: 600,
    popperOptions: {
      strategy: 'fixed',
    },
  });



    
});

