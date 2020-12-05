const CHEGG_QUESTION_BASE_URL =
	"https://www.chegg.com/homework-help/questions-and-answers/q";
const CHEGG_RESULTS_PAGE_BASE_URL = "https://www.chegg.com/search";

const createTab = (url, index = null) => {
	return new Promise((resolve, reject) => {
		chrome.tabs.create({ url, index }, resolve);
	});
};

const getTab = url => {
	return new Promise((resolve, reject) => {
		chrome.tabs.query({ url }, resolve);
	});
};

const sendMessageToTab = async (request, tabId) => {
	return new Promise((resolve, reject) => {
		const listener = (tid, changeInfo, tab) => {
			if (tid === tabId && changeInfo.status == "complete") {
				chrome.tabs.onUpdated.removeListener(listener);
				chrome.tabs.sendMessage(tabId, request, response => {
					if (!response) {
						reject(response);
					}
					resolve(response);
				});
			}
		};
		chrome.tabs.onUpdated.addListener(listener);
	});
};

const getTranscript = async qid => {
	const transcriptTab = await createTab(CHEGG_QUESTION_BASE_URL + qid);
	try {
		const transcript = await sendMessageToTab(
			{ command: "get-transcript" },
			transcriptTab.id
		);
		return transcript;
	} catch (err) {
		return null;
	}
	// const tab = await getTab(CHEGG_RESULTS_PAGE_BASE_URL + "*");
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
	if (request.command == "get-transcript") {
		getTranscript(request.qid).then(response);
	}
	return true; // To send response asynchronously
});
