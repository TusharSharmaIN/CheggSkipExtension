const searchQuestion = transcript => {
	try {
		const searchBar = document.getElementById("chegg-searchbox");
		const searchBtn = document.querySelector(
			"#chegg-searchbox_combobox > button:nth-of-type(1)"
		);
		// Bubble up input event for React app
		Object.getOwnPropertyDescriptor(
			window.HTMLInputElement.prototype,
			"value"
		).set.call(searchBar, transcript);
		var inputEvent = new Event("input", { bubbles: true });
		searchBar.dispatchEvent(inputEvent);
		// Bubble up click event
		var clickEvent = new Event("click", { bubbles: true });
		clickEvent.simulated = true;
		searchBtn.dispatchEvent(clickEvent);
	} catch (err) {
		console.log(err);
	}
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
	if (request.command == "search-question") {
		searchQuestion(request.transcript);
		response(true);
	}
	return true; // To send response asynchronously
});
