var screenWidth = screen.width;
var animateShowingConfigPanel = undefined;
var animationHiddingConfigPanel = undefined;
var configPanel = document.getElementById('configPanel');
var mainPanel = document.getElementById('mainClock');
    var startStopBtn = document.getElementById('startStopBtn');
    var startStopBtnIcon = document.getElementById('startStopBtn-icon');
    var configBtn = document.getElementById('configBtn');
    
var onExecutionTimer = undefined;
var whitesCentiSec = undefined;
var blacksCentiSec = undefined;

function animatedTransitionToConfiguration(){
    if (animationHiddingConfigPanel !== undefined){
        animationHiddingConfigPanel = undefined;
        clearInterval(animationHiddingConfigPanel);
    }
    animateShowingConfigPanel = setInterval(function (){
        if (animationHiddingConfigPanel !== undefined){
            animationHiddingConfigPanel = undefined;
        }
        if (configPanel.offsetLeft > 0){
            configPanel.style.left = (configPanel.offsetLeft - 10) + "px";
            mainPanel.style.opacity = window.getComputedStyle(mainClock).getPropertyValue("opacity") - 0.03;
        } else{
            clearInterval(animateShowingConfigPanel);
            animateShowingConfigPanel = undefined;
        }
    }, 10);
}
function animatedTransitionToMain(){
    if (animateShowingConfigPanel !== undefined){
       clearInterval(animateShowingConfigPanel);
        animateShowingConfigPanel = undefined;
    }
    
    animationHiddingConfigPanel = setInterval(function (){
        if (configPanel.offsetLeft < screenWidth){
            configPanel.style.left = (configPanel.offsetLeft + 10) + "px";
            mainPanel.style.opacity = Number(window.getComputedStyle(mainClock).getPropertyValue("opacity")) + 0.03;
        } else{
            clearInterval(animationHiddingConfigPanel);
            animationHiddingConfigPanel = undefined;
        }
    }, 10);
}

function startGame(){
    startStopBtn.setAttribute("onclick", "gameFinnished('')");
    startStopBtnIcon.innerHTML = "stop";

    
    whitesCentiSec = 0;
    blacksCentiSec = 0;
    countDown(whitesSeconds.id);
    
    configBtn.setAttribute("onclick", "");
    configBtn.style.opacity = 0.55;
}
function gameFinnished(strWinner){
    if (onExecutionTimer !== undefined){
        clearInterval(onExecutionTimer);
    }
    if (strWinner !== ''){
        alert(strWinner + " Won on time!");
    }
    whitesPlayerPanel.setAttribute("onclick", "");
    blacksPlayerPanel.setAttribute("onclick", "");
    
    startStopBtn.setAttribute("onclick", "startGame()");
    startStopBtnIcon.innerHTML = "play_arrow";
    
    configBtn.setAttribute("onclick", "animatedTransitionToConfiguration()");
    configBtn.style.opacity = 0.85;
    
    blacksPlayerPanel.style.opacity = 1;
    whitesPlayerPanel.style.opacity = 1;
    
     resetTimers();
    
}

function countDown(timerToId){ // Need to implement the Bonus time!

    if (onExecutionTimer !== undefined){
        clearInterval(onExecutionTimer);
    }
    
    onExecutionTimer = setInterval(function (){
                                    if (timerToId === whitesSeconds.id){
                                        var secValue = Number(whitesSeconds.innerHTML);
                                        var minValue = Number(whitesMinutes.innerHTML);
                                        whitesPlayerPanel.setAttribute("onclick", "countDown('"+blacksSeconds.id+"')");
                                        blacksPlayerPanel.setAttribute("onclick", "");
                                        if (whitesCentiSec < 98) {
                                            whitesCentiSec += 1;
                                        } else {
                                            if (secValue > 0){
                                                whitesSeconds.innerHTML = (secValue - 1).toString();
                                            } else if (minValue > 0){
                                                whitesSeconds.innerHTML = "59";
                                                whitesMinutes.innerHTML = (minValue - 1).toString();
                                            } else{
                                                gameFinnished("Blacks");
                                            }
                                            whitesCentiSec = 0;
                                        }
                                           
                                    } else {
                                        var secValue = Number(blacksSeconds.innerHTML);
                                        var minValue = Number(blacksMinutes.innerHTML);
                                        whitesPlayerPanel.setAttribute("onclick", "");
                                        blacksPlayerPanel.setAttribute("onclick", "countDown('"+whitesSeconds.id+ "')");
                                        if (blacksCentiSec < 98) {
                                            blacksCentiSec += 1;
                                        } else {
                                            
                                            if (secValue > 0) {
                                                blacksSeconds.innerHTML = (secValue - 1).toString();
                                            } else if (minValue > 0) {
                                                blacksSeconds.innerHTML = "59";
                                                blacksMinutes.innerHTML = (minValue - 1).toString();
                                            } else {
                                                gameFinnished("Whites");
                                            }
                                            blacksCentiSec = 0;
                                        }
                                    }
                            }
                            , 10);
    
    if (timerToId === whitesSeconds.id) {
        blacksPlayerPanel.style.opacity = 0.25;
        whitesPlayerPanel.style.opacity = 1;
    } else {
        whitesPlayerPanel.style.opacity = 0.25;
        blacksPlayerPanel.style.opacity = 1;
    }
    
}

function resetTimers(){
    whitesCentiSec = 0;
    blacksCentiSec = 0;
    
    if (timeOnMinutes){
        whitesMinutes.innerHTML = timeAmount.toString();
        blacksMinutes.innerHTML = timeAmount.toString();
        whitesSeconds.innerHTML = "00";
        blacksSeconds.innerHTML = "00";
    } else{
        whitesMinutes.innerHTML = "00";
        blacksMinutes.innerHTML = "00";
        whitesSeconds.innerHTML = timeAmount.toString();
        blacksSeconds.innerHTML = timeAmount.toString();
    }
}