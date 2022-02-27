$(document).ready(function(){


    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });









    $(".section-links button").click(function(){
        //set animation time
        var time = 400
        //get selected section
        var section = $(this).data('section')
        //hide active section
        $(".section-content.active").fadeOut(time).removeClass("active")
        $(".section-links button.active").removeClass("active")
        //show section selected
        setTimeout(function(){
            $("." + section).fadeIn(time).addClass("active")
            $(this).addClass("active")
        }, time);
        

    });




});