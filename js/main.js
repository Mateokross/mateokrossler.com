$(document).ready(function(){


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