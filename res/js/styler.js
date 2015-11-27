function responsiveStyler(){
    screenHeight = screen.height;
    screenWidth = screen.width;
    if ((screenHeight <= 1024) && (screenWidth <= 768)) {
        if (screenHeight > screenWidth){
            mobilePortraitResponsiveStyler();
        } else{
            mobileLandscapeResponsiveStyler();
        }
        
    }
    
}

function mobilePortraitResponsiveStyler(){
    
    container1 = document.getElementById('container1');
    if (container1.classList.contains("rotateLandscape")){
        container1.classList.remove("rotateLandscape");
    }
    container1.classList.add("rotatePortrait");
    container2 = document.getElementById('container2');

    containersHeight = screen.height /2;
    containersWidth = screen.width;

    container1.style.background = "#485c4c";// Azul copado : 484c5c
    container1.style.height = containersHeight + "px";
    container1.style.width = containersWidth + "px";
    container1.style.paddingTop = "6%";
        
    container2.style.background = "#f0f0e7";
    container2.style.height = containersHeight + "px";
    container2.style.width = containersWidth + "px";
    container2.style.paddingTop = "6%";

//Lets start working with the first container
    
    horseContainer = document.getElementById('horsePlayer1');
    timerContainer = document.getElementById('timerPlayer1');
    nameContainer = document.getElementById('namePlayer1');
    
    horseContainer.style.height = (containersHeight / 3) + "px";
    
    timerContainer.style.height = (containersHeight / 3) + "px";
    timerContainer.style.fontSize = (containersHeight / 3) + "px";
    
    nameContainer.style.height = (containersHeight / 6) + "px";
    
//Now we work with the second container
    
    horseContainer2 = document.getElementById('horsePlayer2');
    timerContainer2 = document.getElementById('timerPlayer2');
    nameContainer2 = document.getElementById('namePlayer2');
    
    horseContainer2.style.height = (containersHeight / 3) + "px";
    
    timerContainer2.style.height = (containersHeight / 3) + "px";
    timerContainer2.style.fontSize = (containersHeight / 3) + "px";
    
    nameContainer2.style.height = (containersHeight / 6) + "px";
    
// And finally the buttons

    buttonLeft = document.getElementById('startStopBtn');
    buttonRight = document.getElementById('configBtn');
    
    buttonLeft.style.opacity = 0.85;
    buttonRight.style.opacity = 0.85;
    
    buttonLeft.style.height = containersHeight / 3 + "px";
    buttonLeft.style.width = containersHeight / 3 + "px";
    buttonLeft.style.top = (containersHeight - containersHeight / 6) + "px";
    buttonLeft.style.left = 0 - (containersHeight * 0.10) + "px";
    buttonLeft.style.zIndex = 10;
    
    buttonRight.style.height = containersHeight / 3 + "px";
    buttonRight.style.width = containersHeight / 3 + "px";
    buttonRight.style.top = (containersHeight - containersHeight / 6) + "px";
    buttonRight.style.left = (containersWidth - (containersHeight /3 * 0.70)) + "px";
    buttonRight.style.overflowX = "hidden";
    buttonRight.style.zIndex = 10;
    
}

function mobileLandscapeResponsiveStyler(){
    
}

responsiveStyler();
window.onresize = responsiveStyler;