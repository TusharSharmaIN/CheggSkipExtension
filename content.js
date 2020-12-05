// Inject script to intercept console logs
var script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');
script.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);

document.addEventListener('qidRead', (e) => {
    const qid = e.detail;
    if (!qid) return;
});

const initializeCountdown = () => {
    var countdown = new Audio(chrome.runtime.getURL("countdown.mp3"));

    // Get time left and log
    var id = setInterval(function () {
        var data = JSON.parse(window.localStorage.jStorage);
        if (data.minutes == 0 && (data.seconds == "10" || data.seconds == "11")) {
            countdown.play();
            clearInterval(id);
        }
    }, 1000);
}

initializeCountdown();