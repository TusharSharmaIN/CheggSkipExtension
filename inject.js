// Save original log function
console.logFunction = console.log;
// Bind new log function
console.newLog = console.log.bind(console);
// Array to store logs
console.logs = [];
// New log function implementation
console.log = function () {
	console.logs.push(Array.from(arguments));
	console.newLog.apply(console, arguments);
};

const undoLogInterception = () => {
	console.log = console.newLog.bind(console);
	console.log = console.logFunction;
};

const getQid = () => {
	// Search for qid and return
	const re = new RegExp("SQid : ([0-9]+)");
	let qid = null;
	console.logs.forEach(log => {
		const match = log[0].match(re);
		if (match && match[1]) {
			qid = match[1];
		}
	});
	return qid;
};

// Run after page has loaded completely
window.onload = () => {
	undoLogInterception();
	document.dispatchEvent(new CustomEvent("qidRead", { detail: getQid() }));
};

// Insert extension after DOM has loaded
window.addEventListener("DOMContentLoaded", event => {
	initialize();
});

const initialize = () => {
	// Add styling sheet for extension-box
	var css = document.createElement("style");
	const style = ` #ext-exit-btn:hover, #ext-skip-btn:hover{
                        background: #E71C23;
                        color: white;
                    }
                    #ext-answer-btn:hover, #ext-submit-btn:hover{
                        background: #019031;
                        color: white;
                    }
                    .ext-btn{
                        margin: 10px 0;
                        padding: 0 20px;
                        border-radius: 5px;
                        outline: none;
                    }
                    .lock-overlay{
                        display: none;
                        width: 100%;
                        height: 100%;
                        background: red;
                        color: white;
                    }
                `;
	css.appendChild(document.createTextNode(style));
	document.getElementsByTagName("head")[0].appendChild(css);

	// Add extension box at top of the page
	var node = document.createElement("div");
	node.setAttribute("id", "extension-box");
	node.setAttribute(
		"style",
		"display: flex; background: black; position: fixed; top: 0vh; height: 60px; width: 100vw; z-index: 10000; flex-wrap: wrap; justify-content: space-around;"
	);
	node.innerHTML = `  <button id = "ext-exit-btn" class = "ext-btn">EXIT</button>
                        <button id = "ext-skip-btn" class = "ext-btn">SKIP TO NEXT QUESTION</button>
                        <button id = "ext-answer-btn" class = "ext-btn">ANSWER</button>
                        <button id = "ext-submit-btn" class = "ext-btn" style = "display: none">SUBMIT ANSWER</button>
                    `;
	document.getElementsByTagName("body")[0].appendChild(node);

	if (JSON.parse(window.localStorage.jStorage).questionSkipSource == "a") {
		console.log("Answer button clicked");
		document.getElementById("ext-answer-btn").setAttribute("disabled", true);
		document.getElementById("ext-answer-btn").style.display = "none";
		document.getElementById("ext-submit-btn").style.display = "block";
	}

	// Button click events
	document
		.getElementById("ext-exit-btn")
		.addEventListener("click", function () {
			document.getElementById("skipQuestion-Leave").click();
		});

	document
		.getElementById("ext-skip-btn")
		.addEventListener("click", function () {
			document.getElementById("skipQuestion").click();
			document.getElementById("noSubKnowledge").click();
			document.getElementsByClassName("btn-primary")[0].click();
		});

	document
		.getElementById("ext-answer-btn")
		.addEventListener("click", function () {
			document.getElementById("ques-ans-btn").click();
			document.getElementsByClassName("lock-overlay")[0].style.display =
				"block";
		});

	document.getElementById("ext-submit-btn").addEventListener("click", () => {
		document.getElementById("submit-ans-btn").click();
		document.querySelectorAll(".primary.btn-lg.btn-primary")[1].click();
	});

	document
		.getElementById("ques-ans-btn")
		.addEventListener("click", function () {
			console.log("Answer button clicked");
			document.getElementById("ext-answer-btn").setAttribute("disabled", true);
			document.getElementById("ext-answer-btn").style.display = "none";
			document.getElementById("ext-submit-btn").style.display = "block";
			document.getElementById("extension-box").style.background = "black";
		});

	document.getElementById("ext-skip-btn").focus();
};
