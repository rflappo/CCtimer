function responsiveStyler(){ //funcion repetida en styler.js
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
//Generics
    configPanel = document.getElementById('configPanel');
    headerPanel = document.getElementById('headerPanel');
    timeConfigPanel = document.getElementById('timeConfigPanel');
    playersConfigPanel = document.getElementById('playersConfigPanel');
    footerPanel = document.getElementById('footerPanel');
    
    panelHeight = 3 * (screen.height / 5);
    panelWidth = screen.width;
    
//configPanel - general -
    configPanel.style.height = panelHeight + "px";
    configPanel.style.width = panelWidth + "px";
    configPanel.style.top = (screen.height / 5) + "px";
    
 //headerPanel   
    headerPanel.style.height = (0.17361 * panelHeight) + "px";
    headerPanel.style.width = panelWidth + "px";
    headerPanel.style.fontSize = (0.17361 * panelHeight) / 2 + "px";
    
 //timeConfigPanel  
    timeConfigPanel.style.height = (0.28472 * panelHeight) + "px";
    timeConfigPanel.style.width = panelWidth + "px";
    
    tcpTitleImg = document.getElementById('timeConfigPanel-titleImg');
    tcpTitleImg.style.paddingLeft = "5%";
    tcpTitleText = document.getElementById('timeConfigPanel-titleText');
    tcpTitleText.style.fontSize = (0.17361 * panelHeight) / 3 + "px";
    tcpTitleText.style.paddingLeft = "4%";
    //-> TimeOptions
    tcpTimeOptions = document.getElementById('tcp-timeOptions');
    tcpTimeOptions.style.fontSize = (0.17361 * panelHeight) / 3.5 + "px";
    tcpTimeOptions.style.left = 5 * panelWidth / 32 + "px";
    //--> timeNumber
    tcpTimeNumber = document.getElementById('timeNumber');
    tcpTimeNumber.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpTimeNumber.style.height =  (0.17361 * panelHeight) / 2.5 + "px";
    tcpTimeNumber.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    //--> timeMetrics
    tcpTimeMetrics = document.getElementById('timeMetrics');
    tcpTimeMetrics.style.width = (0.03125 * panelWidth * 7) + "px";
    tcpTimeMetrics.style.height =  (0.17361 * panelHeight) / 2 + "px";
    tcpTimeMetrics.style.fontSize = (0.17361 * panelHeight) / 4 + "px";
    
 //playersConfigPanel    
    playersConfigPanel.style.height =(0.43055 * panelHeight) + "px";
    playersConfigPanel.style.width = panelWidth + "px";
    
 //footerPanel   
    footerPanel.style.height = (0.11112 * panelHeight) + "px";
    footerPanel.style.width = panelWidth + "px";
}

function mobileLandscapeResponsiveStyler(){ //solo pongo la parte que complementara a styler.js
    
}

responsiveStyler(); //repetido en styler.js
window.onresize = responsiveStyler; //repetido en styler .js