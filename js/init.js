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
    //genero el selector - con default el del proyecto de eventos
    var selector = id ? "#" + id : "#splide-eventos" 

    //me fijo los splide actuales
    var activeSliders = []
    for (var slider of $(".splide.is-active")){
      activeSliders.push("#" + slider.id);
    }

    //cargo el splide nuevo si no está activo  
    if(activeSliders.includes(selector) == false){
      console.log("cargo splide")
      new Splide( selector, {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        lazyLoad: 'sequential',
        pagination: false,
        padding: 0,
      }).mount();
    }
    
}

function toggleSlider(id){
    //deploy slider
    deploySlider("splide-" + id)
    //hide active slider
    $(".container.section.project.active").removeClass("active").addClass("hide");
    //show new slider
    $("#project-"+id).addClass("active").removeClass("hide")[0].scrollIntoView({behavior: "smooth"});
        
}