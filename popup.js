var line1 = "document.getElementById('skipQuestion').click();";
var line2 = "document.getElementById('noSubKnowledge').click();";
var line3 = "document.getElementsByClassName('btn-primary')[0].click();";
var reason60 = "document.getElementById('reason60').click();";//Other
var reason61 = "document.getElementById('reason61').click();";//C programming
var reason62 = "document.getElementById('reason62').click();";//C++ programming
var reason63 = "document.getElementById('reason63').click();";//Java programming
var reason64 = "document.getElementById('reason64').click();";//Python programming
var reason65 = "document.getElementById('reason65').click();";//Data structures
var reason66 = "document.getElementById('reason66').click();";//Microsoft technologies
var reason75 = "document.getElementById('reason75').click();";//Assembly language
var reason76 = "document.getElementById('reason76').click();";//Unix/Linux
var reason77 = "document.getElementById('reason77').click();";//Computer Networks
var reason78 = "document.getElementById('reason78').click();";//Operating systems
var reason79 = "document.getElementById('reason79').click();";//Computer Organisation
var reason82 = "document.getElementById('reason82').click();";//Software Engineering

function injectScriptForAssembly(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason75 + line3 }); 
    });
}

function injectScriptForC(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason61 + line3 }); 
    });
}

function injectScriptForCpp(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason62 + line3 }); 
    });
}

function injectScriptForJava(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason63 + line3 }); 
    });
}

function injectScriptForPython(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason64 + line3 }); 
    });
}

function injectScriptForMicrosoft(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason66 + line3 }); 
    });
}

function injectScriptForCOA(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason79 + line3 }); 
    });
}

function injectScriptForOS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason78 + line3 }); 
    });
}

function injectScriptForUnix(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason76 + line3 }); 
    });
}

function injectScriptForSE(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason82 + line3 }); 
    });
}

function injectScriptForCN(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason77 + line3 }); 
    });
}

function injectScriptForDS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason65 + line3 }); 
    });
}

function injectScriptForOther(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason60 + line3 }); 
    });
}

function injectScriptForRefresh(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
		//Query the active tab, which will be only one tab
        //and inject the script in it	
		chrome.tabs.update(tabs[0].id, {url: URL2});
    });
}

var URL1 = "https://www.chegg.com/*";
var URL2 = "https://www.chegg.com/homework-help/expertquestion";

function openChegg(){
    //Query for tabs with url: 'https://www.chegg.com/homework-help/expertquestion'
    chrome.tabs.query({url: URL2, currentWindow: true}, function(tabs){
        //If a tab with url: 'https://www.chegg.com/homework-help/expertquestion' is not found
        if(tabs.length == 0){
            //Query for tab(s) with url matching with www.chegg.com
            chrome.tabs.query({url: URL1}, function(tabs){
                //If a tab with url: https://www.chegg.com/*' is found then update first tab in array of tabs 
                //with url: 'https://www.chegg.com/homework-help/expertquestion'
                //and remove all rest of the tabs
                if(tabs.length > 0){
                    chrome.tabs.update(tabs[0].id, {url: URL2, active: true});
                    for(var i = 1; i < tabs.length; i++)
                        chrome.tabs.remove(tabs[i].id);//Remove all redundant tabs
                }
                //If no tab with url: 'https://www.chegg.com/*' is open then create a new tab 
                //with url: 'https://www.chegg.com/homework-help/expertquestion'
                else{
                    chrome.tabs.create({url: URL2});
                }
            });
        }
    });
}

//Open chegg answering page when extension icon is clicked
openChegg();

document.getElementById('assembly-skip-button').addEventListener('click', injectScriptForAssembly);
document.getElementById('c-skip-button').addEventListener('click', injectScriptForC);
document.getElementById('cpp-skip-button').addEventListener('click', injectScriptForCpp);
document.getElementById('java-skip-button').addEventListener('click', injectScriptForJava);
document.getElementById('python-skip-button').addEventListener('click', injectScriptForPython);
document.getElementById('microsoft-skip-button').addEventListener('click', injectScriptForMicrosoft);
document.getElementById('coa-skip-button').addEventListener('click', injectScriptForCOA);
document.getElementById('os-skip-button').addEventListener('click', injectScriptForOS);
document.getElementById('unix-skip-button').addEventListener('click', injectScriptForUnix);
document.getElementById('se-skip-button').addEventListener('click', injectScriptForSE);
document.getElementById('cn-skip-button').addEventListener('click', injectScriptForCN);
document.getElementById('ds-skip-button').addEventListener('click', injectScriptForDS);
document.getElementById('other-skip-button').addEventListener('click', injectScriptForOther);
document.getElementById('refresh-button').addEventListener('click', injectScriptForRefresh);