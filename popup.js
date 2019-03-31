function injectScriptForAssembly(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason75').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForC(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason61').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForCpp(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason62').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForJava(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason63').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForPython(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason64').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForMicrosoft(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason66').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForCOA(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason79').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForOS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason78').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForUnix(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason76').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForSE(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason82').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForCN(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason77').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForDS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason65').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForOther(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
        //Query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {code: 
           "document.getElementById('skipQuestion').click();\
            document.getElementById('noSubKnowledge').click();\
            document.getElementById('reason60').click();\
            document.getElementsByClassName('btn-primary')[0].click();\
            "});
    });
}

function injectScriptForRefresh(){
	
	var URL = "https://www.chegg.com/homework-help/expertquestion";

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs, id) {
		//Query the active tab, which will be only one tab
        //and inject the script in it	
		chrome.tabs.update(tabs[0].id, {url: URL});
    });
}
	
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
