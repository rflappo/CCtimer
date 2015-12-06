var onExecutionTimer = undefined;
var logoText = "Carpet";
var i = 0;
function logoAnimation(){
    onExecutionTimer = setInterval(function (){
        if (mainText.innerHTML == logoText){
            clearInterval(onExecutionTimer);
            onExecutionTimer = undefined;
            setTimeout(function () {Init();}, 1500);
        } else{
            mainText.innerHTML = mainText.innerHTML + logoText[i];
            i = i + 1;
            mainText.style.opacity = Number(mainText.getAttribute("opacity")) + (0.16 * i);
        }
    }, 100);
}