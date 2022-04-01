$(window).load(function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  $('.preloader.nombre').css("display","none");
  $('.preloader-circle').css("display","none");
  $('.preloader').fadeOut(1000);
  $("body").removeClass("loading");

  /* ==========================================================================
    Burger Menu
    ========================================================================== */
  function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("bm-1").classList.toggle("close");
    document.getElementById("bm-2").classList.toggle("close");
    document.getElementById("bm-3").classList.toggle("close");
  };

  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());


  /* ==========================================================================
    Desabilita links de fotos en celulares
    ========================================================================== */
  if (window.screen.width < 480) {
      $("a.gallery-item").attr("class", "inactive-link");
  }
  
  /* ==========================================================================
    maginidic-popup
    ========================================================================== */
  $('.gallery-item').magnificPopup({
    type: 'image',
    disableOn: 480,
    midClick:true,
    preload: [1,3],
    gallery:{
    enabled:true
    }
  });


});      