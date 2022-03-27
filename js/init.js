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

    deploySlider()
});

function deploySlider(id){
    var selector = id ? "#" + id : "#splide-eventos" 
    // console.log(selector)

    //agregar validacion para no hacer mount repetidas veces
    new Splide( selector, {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        lazyLoad: 'sequential',
        pagination: false,
        padding: 0,
    }).mount();
}

function toggleSlider(id){
    //deploy slider
    deploySlider("splide-" + id)
    //hide active slider
    $(".container.section.project.active").removeClass("active").addClass("hide");
    //show new slider
    $("#project-"+id).addClass("active").removeClass("hide");

    
}