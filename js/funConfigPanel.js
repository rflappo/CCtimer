//DOM elements
var chkBonusTime = document.getElementById('chkBonusTime');
var cpTimeNumber = document.getElementById('timeNumber');
    var timeMetrics = document.getElementById('timeMetrics');
var btConfigOptions = document.getElementById('bonusTimeConfigOptions');
    var cpBonusTimeNumber = document.getElementById('bonusTimeNumber');
    var bonusMetrics = document.getElementById('bonusTimeMetrics');
var mainTimerPlayer1 = document.getElementById('timerPlayer1');
    var mainPlayer1Minutes = document.getElementById('minutesPlayer1');
    var mainPlayer1Seconds = document.getElementById('secondsPlayer1');
var mainTimerPlayer2 = document.getElementById('timerPlayer2');
    var mainPlayer2Minutes = document.getElementById('minutesPlayer2');
    var mainPlayer2Seconds = document.getElementById('secondsPlayer2');

var colorDesignation1 = document.getElementById('colorDesignation1');
var colorDesignation2 = document.getElementById('colorDesignation2');

var configPanel = document.getElementById('configPanel');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

//Variables
var whitesPlayerPanel = undefined;
var whitesTimer = undefined;
    var whitesMinutes = undefined;
    var whitesSeconds = undefined;

var blacksPlayerPanel = undefined;
var blacksTimer = undefined;
    var blacksMinutes = undefined;
    var blacksSeconds = undefined;

var bonusTimeAmount = 0;
var timeAmount = 30;


var timeOnMinutes = true;
function Init(){
    if (mainPanel.classList.contains("hide")){
        mainPanel.classList.remove("hide");
        configPanel.classList.remove("hide");
    }
    splashOpacity = 1;
    onExecutionTimer = setInterval(function (){
     if (splashOpacity > 0 ){
        splashOpacity = splashOpacity - 0.035; // no me convencen los tiempos, pero bueno ANDA!
        mainDiv.style.opacity = splashOpacity;
        mainText.style.opacity = splashOpacity - 0.65;
        
     } else{
         mainDiv.style.zIndex = -1;
         clearInterval(onExecutionTimer);
         onExecutionTimer = undefined;
     } 
    }, 100);
    configPanel.style.left = screen.width + "px";
    //Selections tag default selection
    
    
    colorDesignation1.selectedIndex = 0;
    colorDesignation2.selectedIndex = 0;
    timeMetrics.selectedIndex = 0;
    bonusMetrics.selectedIndex = 1;
    
    //time's default numbers
    cpTimeNumber.value = 30;
    cpBonusTimeNumber.value = 10;
    cpBonusTimeNumber.disabled = true;
    bonusMetrics.disabled = true;
    
    
    btConfigOptions.style.opacity = 0.1;
    
    player1Name = document.getElementById('player1Name');
    player1Name.value = document.getElementById('namePlayer1').innerHTML;
    player2Name = document.getElementById('player2Name');
    player2Name.value = document.getElementById('namePlayer2').innerHTML;
    
    whitesTimer = mainTimerPlayer1;
        whitesMinutes = mainPlayer1Minutes;
        whitesSeconds = mainPlayer1Seconds;
            whitesPlayerPanel = container1;
    blacksTimer = mainTimerPlayer2;
        blacksMinutes = mainPlayer2Minutes;
        blacksSeconds = mainPlayer2Seconds;
            blacksPlayerPanel = container2;
    
}

function toggleBonusConfig(){
    if (chkBonusTime.checked){
        enablingBonusConfig();
    } else{
        disableBonusConfig();
    }
}
function enablingBonusConfig(){
    btConfigOptions.style.opacity = 1;
    
    bonusMetrics.disabled = false;
    cpBonusTimeNumber.disabled = false;
    
}
function disableBonusConfig(){
    btConfigOptions.style.opacity = 0.5;
    
    var bonusMetrics = document.getElementById('bonusTimeMetrics');
    bonusMetrics.disabled = true;
    var bonusTimeNumber = document.getElementById('bonusTimeNumber');
    bonusTimeNumber.disabled = true;
}
function onColorSelectionChoice(whoSelected){
    var selectedIndex = undefined;
    
    var theOtherSelection = undefined;
    if (whoSelected.id.toString() === "colorDesignation1") {
        selectedIndex = colorDesignation1.selectedIndex;
        theOtherSelection = colorDesignation2;
    } else{
        selectedIndex = colorDesignation2.selectedIndex;
        theOtherSelection = colorDesignation1
    }
    
    if (selectedIndex === 0){
        theOtherSelection.selectedIndex = 0;
    } else {
        theOtherSelection.selectedIndex = 1;
    }
    
}

function acceptAll(){
    var mainPlayer2Name = document.getElementById('namePlayer2');
    var mainPlayer1Name = document.getElementById('namePlayer1');
    
    var cpPlayer1Name = document.getElementById('player1Name');
    var cpPlayer2Name = document.getElementById('player2Name');
    
    mainPlayer1Name.innerHTML = cpPlayer1Name.value;
    mainPlayer2Name.innerHTML = cpPlayer2Name.value;
    
    timeAmount = cpTimeNumber.value;
    switch(timeMetrics.selectedIndex){
        case 0: //minutes
            mainPlayer1Minutes.innerHTML = timeAmount;
            mainPlayer2Minutes.innerHTML = timeAmount;
                mainPlayer1Seconds.innerHTML = "00";
                mainPlayer2Seconds.innerHTML = "00";
            timeOnMinutes = true;
            break;
        case 1:
            mainPlayer1Seconds.innerHTML = timeAmount;
            mainPlayer2Seconds.innerHTML = timeAmount;
                mainPlayer1Minutes.innerHTML = "00";
                mainPlayer2Minutes.innerHTML = "00";
            timeOnMinutes = false;
            break;
        default:
            break;
            
    }
    if (chkBonusTime.checked){
        bonusTimeAmount = cpBonusTimeNumber.value; 
    } else{
        bonusTimeAmount = 0;
    }
    
    var horsePlayer1 = document.getElementById('horseP1Img');
    var horsePlayer2 = document.getElementById('horseP2Img');
    switch(colorDesignation1.selectedIndex){
        case 0:
            whitesPlayerPanel = container1;
            horsePlayer1.setAttribute("src", "res/img/whiteHorse-Right.png");
            whitesTimer = mainTimerPlayer1;
                whitesMinutes = mainPlayer1Minutes;
                whitesSeconds = mainPlayer1Seconds;
            
            blacksPlayerPanel = container2;
            horsePlayer2.setAttribute("src", "res/img/blackHorse-Right.png");
            blacksTimer = mainTimerPlayer2;
                blacksMinutes = mainPlayer2Minutes;
                blacksSeconds = mainPlayer2Seconds;
            break;
        case 1:
            whitesPlayerPanel = container2;
            horsePlayer1.setAttribute("src", "res/img/blackHorse-Right.png");
            blacksTimer = mainTimerPlayer1;
                blacksMinutes = mainPlayer1Minutes;
                blacksSeconds = mainPlayer1Seconds;
            
            blacksPlayerPanel = container1;
            horsePlayer2.setAttribute("src", "res/img/whiteHorse-Right.png");
            whitesTimer = mainTimerPlayer2;
                whitesMinutes = mainPlayer2Minutes;
                whitesSeconds = mainPlayer2Seconds;
            break;
        default:
            break;
    }
    
    animatedTransitionToMain();
}