$(window).on("load", function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  $(".preloader-circle").css("display", "none");
  $(".preloader").fadeOut(400);
  $("body").removeClass("loading");

  /* ==========================================================================
    Auto-updating year (footer)
    ========================================================================== */
  $("span.year").text(new Date().getFullYear());
});



























/* ==========================================================================
  Fixes for edge & chrome
  ========================================================================== */
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  //Example
  //$(".footer.fix").css({
  //  "padding-top": "35px",
  //  "height": "294px"
  //});
}




/* ==========================================================================
  Paralax
  ========================================================================== */
/*
if (document.documentElement.clientWidth > 480) {(function() {
    window.addEventListener('scroll', function(event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = Math.round(-(topDistance * depth));
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
}});}).call(this);}
*/


/* ==========================================================================
  WOW.js
  ========================================================================== */
/*
window.onload = function() { 
    wow = new WOW({
        boxClass:'wow',
        animateClass:'fadeUp',
        offset:0,
        mobile:false,
        live:true})
    
    new WOW().init();
};
*/

/* ==========================================================================
  Screenshot Slider
  ========================================================================== */
/*
$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
});
*/