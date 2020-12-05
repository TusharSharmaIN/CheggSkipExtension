const getTranscript = () => {
	try {
		const transcript = document.getElementsByClassName(
			"transcribed-image-text-show"
		)[0].innerText;
		return transcript;
	} catch (err) {
		return null;
	}
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
	if (request.command == "get-transcript") {
		const transcript = getTranscript();
		response(transcript);
	}
	return true; // To send response asynchronously
});
