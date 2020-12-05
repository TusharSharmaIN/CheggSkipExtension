// Inject script to intercept console logs
let script = document.createElement("script");
script.src = chrome.runtime.getURL("inject.js");
script.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);

document.addEventListener("qidRead", e => {
	const qid = e.detail;
	if (!qid) return;
	document
		.getElementById("ext-search-btn")
		.addEventListener("click", function () {
			getTranscript(qid);
		});
});

const initializeCountdown = () => {
	const countdown = new Audio(chrome.runtime.getURL("countdown.mp3"));

	// Get time left and log
	const id = setInterval(function () {
		const data = JSON.parse(window.localStorage.jStorage);
		if (data.minutes == 0 && (data.seconds == "10" || data.seconds == "11")) {
			countdown.play();
			clearInterval(id);
		}
	}, 1000);
};

initializeCountdown();

const getTranscript = qid => {
	chrome.runtime.sendMessage({ command: "get-transcript", qid }, response => {
		if (!response) {
			console.log("Transcript not found");
			return;
		}
		console.log(response);
	});
};
