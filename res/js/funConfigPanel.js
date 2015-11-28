function Init(){
    //Selections tag default selection
    var colorDesignation1 = document.getElementById('colorDesignation1');
    var colorDesignation2 = document.getElementById('colorDesignation2');
    var timeMetrics = document.getElementById('timeMetrics');
    var bonusMetrics = document.getElementById('bonusTimeMetrics');
    
    colorDesignation1.selectedIndex = 0;
    colorDesignation2.selectedIndex = 0;
    timeMetrics.selectedIndex = 0;
    bonusMetrics.selectedIndex = 1;
    
    //time's default numbers
    var timeNumber = document.getElementById('timeNumber');
    timeNumber.value = 30;
    var bonusTimeNumber = document.getElementById('bonusTimeNumber');
    bonusTimeNumber.value = 10;
    bonusTimeNumber.disabled = true;
    bonusMetrics.disabled = true;
    
    btConfigOptions = document.getElementById('bonusTimeConfigOptions');
    btConfigOptions.style.opacity = 0.1;
    
    player1Name = document.getElementById('player1Name');
    player1Name.value = document.getElementById('namePlayer1').innerHTML;
    player2Name = document.getElementById('player2Name');
    player2Name.value = document.getElementById('namePlayer2').innerHTML;
}

function toggleBonusConfig(){
    chkBonusTime = document.getElementById('chkBonusTime');
    if (chkBonusTime.checked){
        enablingBonusConfig();
    } else{
        disableBonusConfig();
    }
}

function enablingBonusConfig(){
    btConfigOptions = document.getElementById('bonusTimeConfigOptions');
    btConfigOptions.style.opacity = 1;
    
    var bonusMetrics = document.getElementById('bonusTimeMetrics');
    bonusMetrics.disabled = false;
    var bonusTimeNumber = document.getElementById('bonusTimeNumber');
    bonusTimeNumber.disabled = false;
    
}
function disableBonusConfig(){
    btConfigOptions = document.getElementById('bonusTimeConfigOptions');
    btConfigOptions.style.opacity = 0.5;
    
    var bonusMetrics = document.getElementById('bonusTimeMetrics');
    bonusMetrics.disabled = true;
    var bonusTimeNumber = document.getElementById('bonusTimeNumber');
    bonusTimeNumber.disabled = true;
}

function onColorSelectionChoice(whoSelected){
    var colorDesignation1 = document.getElementById('colorDesignation1');
    var colorDesignation2 = document.getElementById('colorDesignation2');
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

