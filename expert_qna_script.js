const CHEGG_RESULTS_PAGE_BASE_URL = "https://www.chegg.com/search";
const CHEGG_TRANSCRIPT_PAGE_BASE_URL =
	"https://www.chegg.com/homework-help/questions-and-answers";

// Inject script to intercept console logs
let script = document.createElement("script");
script.src = chrome.runtime.getURL("inject.js");
script.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);

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
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage({ command: "get-transcript", qid }, response => {
			if (!response) reject(response);
			resolve(response);
		});
	});
};

const getTabs = url => {
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage({ command: "get-tab", url }, response => {
			resolve(response);
		});
	});
};

const removeTab = tabId => {
	chrome.runtime.sendMessage({ command: "remove-tab", tabId });
};

const searchInTab = (transcript, tabId) => {
	chrome.runtime.sendMessage({ command: "search-question", transcript, tabId });
};

const searchQuestion = async qid => {
	try {
		const transcript = await getTranscript(qid);
		const resultTab = await getTabs(CHEGG_RESULTS_PAGE_BASE_URL + "*");
		const transcriptTab = await getTabs(CHEGG_TRANSCRIPT_PAGE_BASE_URL + "*");
		if (resultTab) {
			// Close transcript tab
			if (transcriptTab) removeTab(transcriptTab[0].id);
			// Search in result tab
			searchInTab(transcript, resultTab[0].id);
		} else if (transcriptTab) {
			// Search in transcript tab
			searchInTab(transcript, transcriptTab[0].id);
		}
	} catch (err) {
		console.log("Something went wrong!", err);
	}
};

document.addEventListener("qidRead", e => {
	const qid = e.detail;
	if (!qid) return;
	document
		.getElementById("ext-search-btn")
		.addEventListener("click", function () {
			searchQuestion(qid);
		});
});
