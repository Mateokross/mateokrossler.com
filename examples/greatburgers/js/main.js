
//Preloader
$(window).load(function(){
    $('.preloader-circle').css("display","none");
    $('.preloader').fadeOut(1000);
    $("body").removeClass("loading");

    //Burger Menu
    $(".burger-menu").click(function(){burgerMenu()});
    function burgerMenu(){
      $("#sidebar").toggleClass("active");
      $(".burger-menu div").toggleClass("close");
      if ($("#sidebar").class="active"){
        $(".sidebar-footer").removeClass("hidden");
      }else{
        $(".sidebar-footer").addClass("hidden");
      }
      $("header nav ul li").click(function(){burgerMenu()});
    }
    //Colors on scroll
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      //window.innerHeight = 100vh
      if ($(".burger-menu").hasClass("index")){
        var height = window.innerHeight-75;
      } else{
        var height = (window.innerHeight/2)-75;
      }
      if (scroll >= (height)) {
          $(".burger-menu div").css("background-color","black")
      } else {
          $(".burger-menu div").css("background-color","white")
      }
      });

      //year updater
      $("span.year").text(new Date().getFullYear());
});
