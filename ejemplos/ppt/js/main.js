/*Preloader*/
$(window).load(function(){
    $('.preloader-circle').css("display","none");
    $('.preloader').fadeOut(1000);
    $("body").removeClass("loading");
});

var pointsp = 0;
var pointsc = 0;

function play(option){    
    var n = Math.random();
    var computer;
    var result;

    
    /*
    0-0.33 Piedra
    0.33-0.66 Papel
    0.66-1 Tijeras
    */
    //da el computer
    if (n<0.33){
        computer = 'Piedra';
    }else if (n>0.66){
        computer = 'Tijeras';
    }else{
        computer = 'Papel';
    };
    //da el result
    if ((n<0.33 && option=='Papel')||(n>0.33 && n<0.66 && option=='Tijeras')||(n>0.66 && option=='Piedra')){
        result = '¡Ganó!';
        pointsp+=1;
    };
    if ((n<0.33 && option=='Piedra')||(n>0.33 && n<0.66 && option=='Papel')||(n>0.66 && option=='Tijeras')){
        result = '¡Empate!';
    };
    if ((n<0.33 && option=='Tijeras')||(n>0.33 && n<0.66 && option=='Piedra')||(n>0.66 && option=='Papel')){
        result = '¡Perdió!';
        pointsc+=1;
    };

    //respuesta
    //alert('Computer chose ' + computer + '...' + result );
    document.querySelector('#choice').textContent = option + ' vs '+computer+" (pc)";
    document.querySelector('#result').textContent = result;
    var counter = String(pointsp) + ' - ' + String(pointsc);
    document.querySelector('.counter h2').textContent = counter;

    console.log(n+': '+ computer)

    if (pointsc==69 || pointsp==69){
        document.querySelector('.counter h2').textContent += ' ( ͡° ͜ʖ ͡°)';
    }
    };

$(".info-button").click(function(){
    $(".info").css("display","flex");
    $(".info").click(function(){
        $(this).css("display", "none");
    })
});


//year updater
$("span.year").text(new Date().getFullYear());