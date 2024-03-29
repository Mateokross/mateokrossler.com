$(window).on("load", function () {
  /* ==========================================================================
   Preloader
   ========================================================================== */
  // $(".preloader-circle").css("display", "none");
  $(".preloader").fadeOut(400);
  $(".preloader-circle").fadeOut(300);
  $(".preloader").fadeOut(1500);
  $("body").removeClass("loading");

  /* ==========================================================================
  mobile botton nav
  ========================================================================== */
  const photographyToggle = $(".mobile-bottom-nav .photography")
  const photographyBubble = $(".tippy-bubble.photography")
  const developmentToggle = $(".mobile-bottom-nav .development")
  const developmentBubble = $(".tippy-bubble.development")

  photographyToggle.click(function(){
    if($(this).hasClass("active")){
      //remove active class from selector
      photographyToggle.removeClass("active");
      //hide bubble
      photographyBubble.addClass("hide");
    }else{
       //remove active class from other selector
      developmentToggle.removeClass("active");
      //hide other bubble
      developmentBubble.addClass("hide");
      //add active class to selector
      photographyToggle.addClass("active");
      //show bubble
      photographyBubble.removeClass("hide");
    }
   
  });

  developmentToggle.click(function(){
    if($(this).hasClass("active")){
      //remove active class from selector
      developmentToggle.removeClass("active");
      //hide bubble
      developmentBubble.addClass("hide");
    }else{
      //remove active class from other selector
      photographyToggle.removeClass("active");
      //hide other bubble
      photographyBubble.addClass("hide");
      //add active class to selector
      developmentToggle.addClass("active");
      //show bubble
      developmentBubble.removeClass("hide");
    }
  });
  
  /* ==========================================================================
  background movement
  ========================================================================== */
  let blobtl = document.querySelector(".background svg#blob-tl");
  let blobbl = document.querySelector(".background svg#blob-bl");
  let blobtr = document.querySelector(".background svg#blob-tr");
  let blobbr = document.querySelector(".background svg#blob-br");
  let blobbm = document.querySelector(".background svg#blob-bm");

  if(window.innerWidth>600){
    console.log(">600")
    window.addEventListener('mousemove', (event) => {
      let lefthalf = window.innerWidth / 2;
      if (event.clientX < lefthalf) {
          //hovered over left half
          blobtr.classList.add('animation-paused');
          blobbr.classList.add('animation-paused');
          blobtl.classList.remove('animation-paused');
          blobbl.classList.remove('animation-paused');
          blobbm.classList.remove('animation-paused');

      } else if (event.clientX >= lefthalf) {
          //hovered over right half
          blobtl.classList.add('animation-paused');
          blobbl.classList.add('animation-paused');
          blobtr.classList.remove('animation-paused');
          blobbr.classList.remove('animation-paused');
          blobbm.classList.remove('animation-paused');
      }
    });
    window.addEventListener('mouseout', (event) => {
      blobtr.classList.add('animation-paused');
      blobbr.classList.add('animation-paused');
      blobtl.classList.add('animation-paused');
      blobbl.classList.add('animation-paused');
      blobbm.classList.add('animation-paused');
    });
  }


  /* ==========================================================================
  Slider - https://splidejs.com/documents/
  ========================================================================== */
  //init sliders
  for (var slider of $(".splide:not(#splide-eventos)")){
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
    $(".container.project.active").removeClass("active").addClass("hide");
    //show new slider
    var project = id.slice(10);
    $("#project-" + project).addClass("active").removeClass("hide")[0].scrollIntoView({behavior: "smooth", duration: 500});
  }




  
  
});
