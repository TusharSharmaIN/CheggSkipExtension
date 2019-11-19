var line1 = "document.getElementById('skipQuestion').click();";
var line2 = "document.getElementById('noSubKnowledge').click();";
var line3 = "document.getElementsByClassName('btn-primary')[0].click();";
var URL1 = "https://www.chegg.com/my/expertqa";
var URL2 = "https://www.chegg.com/homework-help/expertquestion";
var URL3 = "https://www.chegg.com/my/questions-and-answers/answered";

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

document.getElementsByClassName('skip-btn')[0].addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        chrome.tabs.executeScript(tabs[0].id, {code: line1 + line2 + line3 });
    });
});
document.getElementById('start-answering-btn').addEventListener('click', injectScriptForStartAnswering);
document.getElementById('dashboard-btn').addEventListener('click', injectScriptForDashboard);
document.getElementById('exit-btn').addEventListener('click', injectScriptForExit);