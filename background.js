const CHEGG_TRANSCRIPT_PAGE_BASE_URL =
	"https://www.chegg.com/homework-help/questions-and-answers/q";
const CHEGG_URL = "https://www.chegg.com";

const createTab = (url, index = null) => {
	return new Promise((resolve, reject) => {
		chrome.tabs.create({ url, index }, resolve);
	});
};

const getTab = url => {
	return new Promise((resolve, reject) => {
		chrome.tabs.query({ url }, tabs => {
			if (tabs.length === 0) resolve(null);
			resolve(tabs);
		});
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
	const transcriptTab = await createTab(CHEGG_TRANSCRIPT_PAGE_BASE_URL + qid);
	try {
		const transcript = await sendMessageToTab(
			{ command: "get-transcript" },
			transcriptTab.id
		);
		return transcript;
	} catch (err) {
		return null;
	}
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
	if (request.command == "get-transcript") {
		getTranscript(request.qid).then(response);
	} else if (request.command == "get-tab") {
		getTab(request.url).then(response);
	} else if (request.command == "remove-tab") {
		chrome.tabs.remove(request.tabId);
		response();
	} else if (request.command == "search-question") {
		// Switch focus to results tab
		chrome.tabs.update(request.tabId, { active: true });
		chrome.tabs.sendMessage(request.tabId, request, t => {
			response();
		});
	}
	return true; // To send response asynchronously
});

// Context menu to search selected text on Chegg
const handleContextClick = async (info, tabs) => {
	try {
		const text = info.selectionText;
		const createdTab = await createTab(CHEGG_URL);
		await sendMessageToTab(
			{
				command: "search-question",
				transcript: text,
			},
			createdTab.id
		);
	} catch (err) {
		console.log(err);
	}
};

chrome.contextMenus.onClicked.addListener(handleContextClick);

chrome.contextMenus.create({
	id: "1597534628",
	title: `Search "%s" on Chegg`,
	contexts: ["selection"],
	documentUrlPatterns: ["https://*.chegg.com/*"],
});
