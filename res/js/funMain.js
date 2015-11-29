var screenWidth = screen.width;
var animateShowingConfigPanel = undefined;
var animationHiddingConfigPanel = undefined;
var configPanel = document.getElementById('configPanel');
var mainPanel = document.getElementById('mainClock');

function configBtnClick(){
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

// Actually the Cancel on Configuration Panel should point to another funtion and that function should include this.
// This function will we called from both configPanel buttons!! for the animated transition.
function animatedCancelConfiguration(){
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