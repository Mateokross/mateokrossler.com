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
  Slider
  ========================================================================== */
  //init sliders
  deploySliders()

  //add onclick function to thumbnails
  $(".project-selector div.col").click(function(){
    toggleSlider(this.id)}
    );

/* ==========================================================================
  Otros 
  ========================================================================== */
    $('.sidenav').sidenav({
        edge: 'right'
    });

    
});


function deploySliders(){
  //loopeo todos los splide
  for (var slider of $(".splide")){
    //selecciono el id
    var selector = "#" + slider.id;
    //lo inicializo
    new Splide( selector, {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      lazyLoad: 'sequential',
      pagination: false,
      padding: 0,
      start: 0
    }).mount();
  }
  
}

function toggleSlider(id){
    
    //change active thumbnail
    $(".project-selector .col.active").removeClass("active")
    $("#" + id).addClass("active")
    //hide active slider
    $(".container.section.project.active").removeClass("active").addClass("hide");
    //show new slider
    var project = id.slice(10);
    $("#project-" + project).addClass("active").removeClass("hide")[0].scrollIntoView({behavior: "smooth", duration: 500});

        
}