function injectTheScript(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "CheggSkipScript.js"});
    });
}

document.getElementsByClassName('skip-button')[0].addEventListener('click', injectTheScript);