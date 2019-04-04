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
var URL1 = "https://www.chegg.com/my/expertqa";
var URL2 = "https://www.chegg.com/homework-help/expertquestion";
var URL3 = "https://www.chegg.com/my/questions-and-answers/answered";

function injectScriptForAssembly(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason75 + line3 });
    });
}

function injectScriptForC(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason61 + line3 });
    });
}

function injectScriptForCpp(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason62 + line3 });
    });
}

function injectScriptForJava(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason63 + line3 });
    });
}

function injectScriptForPython(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason64 + line3 });
    });
}

function injectScriptForMicrosoft(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason66 + line3 });
    });
}

function injectScriptForCOA(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason79 + line3 });
    });
}

function injectScriptForOS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason78 + line3 });
    });
}

function injectScriptForUnix(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason76 + line3 });
    });
}

function injectScriptForSE(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
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
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason65 + line3 });
    });
}

function injectScriptForOther(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + reason60 + line3 });
    });
}

function injectScriptForStartAnswering(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
		chrome.tabs.update(tabs[0].id, {url: URL2});
    });
}

function injectScriptForDashboard(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
		chrome.tabs.update(tabs[0].id, {url: URL1});
    });
}

function injectScriptForExit(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
		chrome.tabs.executeScript(tabs[0].id, {code : "document.getElementById('skipQuestion-Leave').click();"});
    });
}

document.getElementById('assembly-skip-btn').addEventListener('click', injectScriptForAssembly);
document.getElementById('c-skip-btn').addEventListener('click', injectScriptForC);
document.getElementById('cpp-skip-btn').addEventListener('click', injectScriptForCpp);
document.getElementById('java-skip-btn').addEventListener('click', injectScriptForJava);
document.getElementById('python-skip-btn').addEventListener('click', injectScriptForPython);
document.getElementById('microsoft-skip-btn').addEventListener('click', injectScriptForMicrosoft);
document.getElementById('coa-skip-btn').addEventListener('click', injectScriptForCOA);
document.getElementById('os-skip-btn').addEventListener('click', injectScriptForOS);
document.getElementById('unix-skip-btn').addEventListener('click', injectScriptForUnix);
document.getElementById('se-skip-btn').addEventListener('click', injectScriptForSE);
document.getElementById('cn-skip-btn').addEventListener('click', injectScriptForCN);
document.getElementById('ds-skip-btn').addEventListener('click', injectScriptForDS);
document.getElementById('other-skip-btn').addEventListener('click', injectScriptForOther);
document.getElementById('start-answering-btn').addEventListener('click', injectScriptForStartAnswering);
document.getElementById('dashboard-btn').addEventListener('click', injectScriptForDashboard);
document.getElementById('exit-btn').addEventListener('click', injectScriptForExit);