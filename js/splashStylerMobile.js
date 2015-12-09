function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
function height(){
   return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
} // pongo aquí porque es el primero que se carga.

var mainDiv = document.getElementById('mainSplash');
    var mainText = document.getElementById('mainText');

function responsiveStyler(){
    mainDiv.style.zIndex = 10;
    splashHeight = height();
    splashWidth = width();
    
    mainDiv.style.height = splashHeight + "px";
    mainDiv.style.width = splashWidth + "px";
    mainDiv.style.left = 0;
    mainDiv.style.top = 0;
    
    if (((splashHeight <= 768) && (splashWidth <= 1024)) || ((splashHeight <= 1024) && (splashWidth <= 768))) {
            mobileResponsiveStyler();
            
    } else{
        desktopResponsiveStyle();
    }
    
}

// DOM elements

function mobileResponsiveStyler(){
    
    mainText.style.top = "40%";
    mainText.style.left = ( 2.3 * splashWidth / 9) + "px";
    mainText.style.fontSize = (0.20 * splashWidth) + "px";
}
function desktopResponsiveStyle(){
    mainText.style.left = ( 3.4* splashWidth / 9) + "px";
    mainText.style.fontSize = (0.1 * splashWidth) + "px";
}
responsiveStyler();
window.onresize = responsiveStyler;
