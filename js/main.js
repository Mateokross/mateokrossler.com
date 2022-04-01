$(window).on("load", function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  $(".preloader-circle").css("display", "none");
  $(".preloader").fadeOut(400);
  $("body").removeClass("loading");

  /* ==========================================================================
  Slider - https://splidejs.com/documents/
  ========================================================================== */
  //init sliders
  for (var slider of $(".splide")){
    //selecciono el id
    var selector = "#" + slider.id;
    //lo inicializo
    new Splide( selector, {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      lazyLoad: 'nearby',
      pagination: false,
      padding: 0,
      start: 0
    }).mount();
  }
  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());


  /* ==========================================================================
    Project Selector - Slider 
    ========================================================================== */
  //add onclick function to thumbnails
  $(".project-selector div.col").click(function(){
    toggleSlider(this.id)}
  );

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
  
});
