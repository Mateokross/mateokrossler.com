
/* ==========================================================================
    Basics
========================================================================== */

var themes = ['funky-orange', 'nerd', 'rainbow', 'forest', 'outrun', 'crt', 'psychedelic', 'star-wars', 'cool'];
var currentTheme = '';
var body = $("body")

//clear themes from body
function clearTheme(){
    if(body.hasClass("loading")){
        body[0].className = 'loading';
    }else if(body.hasClass("shake")){
        body[0].className = 'shake';
    }
    else{
        body[0].className = '';
    }
}

//apply theme
function applyTheme(theme){
    //apply css
    body.addClass(theme);
    //save theme used
    currentTheme = theme;

    console.log(theme)
}

//next theme
function nextTheme(){
    //get current theme position
    var pos = themes.indexOf(currentTheme, 0);

    //prepare next theme
    if(pos + 1 == themes.length){//if last theme in array
        pos = 0;
    }else{
        pos += 1;
    }

    //clear previous theme
    clearTheme()

    //apply next theme
    applyTheme(themes[pos]);
}

//random theme with crazy shit before
function randomThemeCS(){
    var spacing = 200;
    var runs = 3;

    //shake
    body.addClass("shake");

    //run next theme x times
    for (var i = 0; i < runs; i++) {
        setTimeout(function() {
            nextTheme();
        }, spacing * i);
    }
    //set random theme
    setTimeout(function() {
        applyTheme(themes[Math.floor(Math.random()*themes.length)]);
    }, spacing);

    //stop shaking
    setTimeout(function() {
        body.removeClass("shake");
    }, spacing*runs);
    

}