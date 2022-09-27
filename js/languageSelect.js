//http://jsfiddle.net/jmcglone/dqL8m/
//https://stackoverflow.com/questions/50961924/how-can-i-translate-html-input-Placeholders-dynamically-using-jquery

/*
Como usar: 

- para aparecer y desaparecer items por idioma usar clases: .english y .spanish
- para cambiar el texto de un item usar el atributo data-translate. Ejemplo: data-translate="passwordPlaceholder"



*/
// var dictionary  = {
//     "english": {
//         "indexHeader": "Business and Tech graduate from ITBA",
//         "indexWho": "About Me",
//         "indexExperience": "Experience & Curriculum",
//         "indexDevelopment": "Web Development",
//         "indexPhotography": "Photography",
//     },
//     "spanish": {
//         "indexHeader": "Lic. en Administración y Sistemas del ITBA",
//         "indexWho": "¿Quién Soy?",
//         "indexExperience": "Experiencia y CV",
//         "indexDevelopment": "Desarollo Web",
//         "indexPhotography": "Fotografía",
        
//     }
// };



//defino el lenguaje basandome en la cookie
var selectedLanguage = readCookie('language');

//set language if cookie is set
if ((selectedLanguage == 'english') || (selectedLanguage == 'spanish')) {
    setLanguage(selectedLanguage, 0);
}else{ //if not set, set language based on browser preferences
    try {
        var browserLang = navigator.language.substring(0, 2);
        selectedLanguage = browserLang == "es" ? "spanish" : "english";
        setLanguage(selectedLanguage, 1);
    } catch (error) {
        setLanguage('english', 1);
    }
    
}

//set language on selector change
$('.language-selector.en').on('click', function() {
    setLanguage("english", 1);
});

$('.language-selector.es').on('click', function() {
    setLanguage("spanish", 1);
});


//Activa el lenguaje
//recibe el idioma y un boolean de si setea cookie o no
function setLanguage(language, setCookieBool) { // language: string - setCookie: boolean

    //setea cookie de variable language si paso true en setCookieBool
    if (setCookieBool) {
        setCookie('language', language, 365);
    }

    //change css depending on what is selected
    //escondo y muestro items 
    if (language == 'english') {
        $(".english").removeClass("language-select-hide");
        $(".spanish").addClass("language-select-hide");
        //add class to selector
    } else if (language == 'spanish') {
        $(".english").addClass("language-select-hide");
        $(".spanish").removeClass("language-select-hide");
        //add class to selector
    }

    // //cambio el contenido de texto 
    // $("[data-translate]").each(function(){
    //     //change Placeholder texts on forms
    //     if($(this).is( "input" )){
    //         $(this).attr('Placeholder',dictionary[language][$(this).data("translate")] )
    //     //change other texts
    //     } else{
    //         $(this).text(dictionary[language][$(this).data("translate")])
    //     }
    // })

    //cambio el lang del html
    if (language == 'english') {
        $("html").attr("lang","en")
    } else if (language == 'spanish') {
        $("html").attr("lang","es")
    }
    




}

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0)
        nDays = 1;
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}



//Lee la cookie con el nombre de la variable que recibe
//return el valor de la cookie o null
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
