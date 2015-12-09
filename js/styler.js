// Config Panel DOM Elements
var configPanel = document.getElementById('configPanel');

    var headerPanel = document.getElementById('headerPanel');

    var timeConfigPanel = document.getElementById('timeConfigPanel');
        var tcpTitleImg = document.getElementById('timeConfigPanel-titleImg');
        var tcpTitleText = document.getElementById('timeConfigPanel-titleText');
        var tcpTimeOptions = document.getElementById('tcp-timeOptions');
        var tcpTimeNumber = document.getElementById('timeNumber');
        var tcpTimeMetrics = document.getElementById('timeMetrics');
        var tcpBonusTimeNumber = document.getElementById('bonusTimeNumber');
        var tcpBonusTimeMetrics = document.getElementById('bonusTimeMetrics');
        var playersConfigPanel = document.getElementById('playersConfigPanel');
    
    //vars of playersConfigPanel 
    var playersConfigPanel = document.getElementById('playersConfigPanel')
        var spanConfigPanel = document.getElementById('spanConfigPanel');
        var spanGameConfigPanel = document.getElementById('spanGameConfigPanel');
        var p1cpTitleImg = document.getElementById('player1ConfigPanel-titleImg');
        var p1cpTitleText = document.getElementById('player1ConfigPanel-titleText');
        var p1ConfigBox = document.getElementById('player1Config');
        var p1cbName = document.getElementById('player1Name');
        var p2cpTitleImg = document.getElementById('player2ConfigPanel-titleImg');
        var p2cpTitleText = document.getElementById('player2ConfigPanel-titleText');
        var p2ConfigBox = document.getElementById('player2Config');
        var p2cbName = document.getElementById('player2Name');
        var sgcpTitleText = document.getElementById('sgcp-titleText');
        var sgcpColorConfig = document.getElementById('sgcp-colorConfig');
        var sgcpWhites = document.getElementById('sgcp-whitesConfig');
        var sgcpWhitesLabel = document.getElementById('whitesLabel');
        var sgcpColorDesignation1 = document.getElementById('colorDesignation1');
        var sgcpBlacks = document.getElementById('sgcp-blacksConfig');
        var sgcpBlacksLabel = document.getElementById('blacksLabel');
        var sgcpColorDesignation2 = document.getElementById('colorDesignation2');

    var footerPanel = document.getElementById('footerPanel');
        var btnOkAll = document.getElementById('btnOkAll');
            var btnOkAllIcon = document.getElementById('btnOkAll-icon');
        var btnCancelAll = document.getElementById('btnCancelAll');
            var btnCancelAllIcon = document.getElementById('btnCancelAll-icon');
// Main DOM Elements

function responsiveStyler(){
    screenHeight = height();
    screenWidth = width();
    if ((screenHeight <= 1024) && (screenWidth <= 768)) {
        if (screenHeight > screenWidth){
            mobilePortraitResponsiveStyler();
            mobilePortraitResponsiveConfigStyler();
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

    containersHeight = height() /2;
    containersWidth = width();

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
    buttonLeft.style.zIndex = 3;
    buttonLeftIcon = document.getElementById('startStopBtn-icon');
    buttonLeftIcon.style.fontSize = (containersHeight / 7) + "px";
    
    buttonRight.style.height = containersHeight / 3 + "px";
    buttonRight.style.width = containersHeight / 3 + "px";
    buttonRight.style.top = (containersHeight - containersHeight / 6) + "px";
    buttonRight.style.left = (containersWidth - (containersHeight /3 * 0.70)) + "px";
    buttonRight.style.overflowX = "hidden";
    buttonRight.style.zIndex = 3;
    buttonRightIcon = document.getElementById('configBtn-icon');
    buttonRightIcon.style.fontSize = (containersHeight / 7) + "px";
    
    
}
function mobilePortraitResponsiveConfigStyler(){
//Generics
    
    configPanel.style.left = width() + "px";
    
    panelHeight = 3 * (height() / 5);
    panelWidth = width();
    
//configPanel - general -
    configPanel.style.height = panelHeight + "px";
    configPanel.style.width = panelWidth + "px";
    configPanel.style.top = (screen.height / 7) + "px";
    
 //headerPanel   
    headerPanel.style.height = (0.17361 * panelHeight) + "px";
    headerPanel.style.width = panelWidth + "px";
    headerPanel.style.fontSize = (0.17361 * panelHeight) / 2 + "px";
    
 //timeConfigPanel  
    timeConfigPanel.style.height = (0.28472 * panelHeight) + "px";
    timeConfigPanel.style.width = panelWidth + "px";
    
    tcpTitleImg.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
    tcpTitleImg.style.paddingLeft = "3%";
    
    tcpTitleText.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
    tcpTitleText.style.paddingLeft = "4%";
    //-> TimeOptions
   
    tcpTimeOptions.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    tcpTimeOptions.style.left = 5 * panelWidth / 32 + "px";
    //--> timeNumber
    
    tcpTimeNumber.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpTimeNumber.style.height =  (0.17361 * panelHeight) / 2.5 + "px";
    tcpTimeNumber.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    //--> timeMetrics
    
    tcpTimeMetrics.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpTimeMetrics.style.height =  (0.17361 * panelHeight) / 2 + "px";
    tcpTimeMetrics.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    //--> bonusTime
    
    tcpBonusTimeNumber.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpBonusTimeNumber.style.height =  (0.17361 * panelHeight) / 2.5 + "px";
    tcpBonusTimeNumber.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    //--> timeMetrics
    
    tcpBonusTimeMetrics.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpBonusTimeMetrics.style.height =  (0.17361 * panelHeight) / 2 + "px";
    tcpBonusTimeMetrics.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
 //playersConfigPanel
    playersConfigPanel.style.width = panelWidth+ "px";
    playersConfigPanel.style.height = "45%";
    spanWidth = panelWidth / 2;
    
    spanGameConfigPanel.style.left = spanWidth + "px;"
    
    //-> Player1
    p1cpTitleImg.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    p1cpTitleImg.style.paddingLeft = "2%";
    
    p1cpTitleText.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    p1cpTitleText.style.paddingLeft = "2%";
    //--> Player1 Settings Box
    
    p1ConfigBox.style.left  = 4 * spanWidth / 32 + "px";
    p1ConfigBox.style.fontSize  = (0.17361 * panelHeight) / 4 + "px";
    
    p1cbName.style.width = (0.03125 * panelWidth * 7) + "px";
    p1cbName.style.height =  (0.17361 * panelHeight) / 2.5 + "px";
    p1cbName.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
    //-> Player2
    p2cpTitleImg.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    p2cpTitleImg.style.paddingLeft = "2%";
    
    p2cpTitleText.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    p2cpTitleText.style.paddingLeft = "2%";
    //--> Player1 Settings Box
    
    p2ConfigBox.style.left  = 4 * spanWidth / 32 + "px";
    p2ConfigBox.style.fontSize  = (0.17361 * panelHeight) / 4 + "px";
    
    p2cbName.style.width = (0.03125 * panelWidth * 7) + "px";
    p2cbName.style.height =  (0.17361 * panelHeight) / 2.5 + "px";
    p2cbName.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
//spanGameConfigPanel
    
    sgcpTitleText.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
    //-> sgcp-colorConfig
    sgcpColorConfig.style.left  = 2 * spanWidth / 32 + "px";
    sgcpColorConfig.style.top = 4 * spanWidth / 100 + "px";
    sgcpColorConfig.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
    sgcpWhitesLabel.style.width = (0.03125 * panelWidth * 7) + "px";
    
    sgcpColorDesignation1.style.width = (0.03125 * panelWidth * 7) + "px";
    sgcpColorDesignation1.style.height =  (0.17361 * panelHeight) / 2 + "px";
    sgcpColorDesignation1.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
    sgcpBlacksLabel.style.width = (0.03125 * panelWidth * 7) + "px";
    
    
    sgcpColorDesignation2.style.width = (0.03125 * panelWidth * 7) + "px";
    sgcpColorDesignation2.style.height =  (0.17361 * panelHeight) / 2 + "px";
    sgcpColorDesignation2.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
 //footerPanel   
    footerPanel.style.height = (0.11112 * panelHeight) + "px";
    footerPanel.style.width = panelWidth + "px";
    footerPanel.style.top = 0 + "%";
    
    btnOkAll.style.width = ((panelWidth / 2) - (0.01 * panelWidth)) + "px";
    btnOkAll.style.height = (0.11112 * panelHeight) + "px";
    btnOkAllIcon.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
    
    btnCancelAll.style.width = ((panelWidth / 2) - (0.01 * panelWidth)) + "px";
    btnCancelAll.style.height = (0.11112 * panelHeight) + "px";
    btnCancelAllIcon.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
}

function mobileLandscapeResponsiveStyler(){
    
}
function mobileLandscapeResponsiveConfigStyler(){
    
}

responsiveStyler();
window.onresize = responsiveStyler;
