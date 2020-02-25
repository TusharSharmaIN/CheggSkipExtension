var countdown = new Audio(chrome.runtime.getURL("countdown.mp3"));

// Add styling sheet for extension-box
var css = document.createElement("style");
css.type = "text/css";
const style = ` #ext-exit-btn:hover, .skip-btn:hover{
                    background: #E71C23;
                    color: white;
                }
                #ext-answer-btn:hover, #ext-submit-btn:hover{
                    background: #019031;
                    color: white;
                }
                .ext-btn, .skip-btn{
                    margin: 5px 2.5px;
                    padding: 5px 5px;
                    border-radius: 3px;
                    outline: none;
                }
                .skip-btn-container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    width: 75%;
                }
                .lock-overlay{
                    display: none;
                    width: 100%;
                    height: 100%;
                    background: red;
                    color: white;
                }
                .skip-lock {
                    display: none;
                    height: 100%;
                    width: 100%;
                    position: relative;
                    text-align: center;
                    color: white;
                    font-size: 24px;
                    background: darkred;
                    border-radius: 3px;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: all .1s;
                }
                .skip-lock.locked {
                    display: inline-block;
                }
                .skip-lock:hover{
                    background: #D63031;
                }
            `;
css.appendChild(document.createTextNode(style));
document.getElementsByTagName("head")[0].appendChild(css);

// Add extension box at top of the page
var node = document.createElement("div");
node.setAttribute("id", "extension-box");
node.setAttribute(
	"style",
	"display: flex; background: black; position: fixed; top: 0vh; min-height: 60px; width: 100%; z-index: 10000; flex-wrap: wrap; justify-content: center; align-items: center"
);
node.innerHTML = `  
                    <div class="menu">
                        <button id = "ext-exit-btn" class = "ext-btn">EXIT</button>
                    </div>
                    <div class="skip-btn-container">
                        <button id = "skip-reason60" class = "skip-btn">Other CS</button>    
                        <button id = "skip-reason94" class = "skip-btn">Algorithms</button>
                        <button id = "skip-reason181" class = "skip-btn">Assembly</button>
                        <button id = "skip-reason180" class = "skip-btn">C/C++</button>
                        <button id = "skip-reason77" class = "skip-btn">Networking</button>
                        <button id = "skip-reason79" class = "skip-btn">COA</button>
                        <button id = "skip-reason65" class = "skip-btn">Data Structures</button>
                        <button id = "skip-reason80" class = "skip-btn">DBMS</button>
                        <button id = "skip-reason63" class = "skip-btn">JAVA</button>
                        <button id = "skip-reason84" class = "skip-btn">DLD</button>
                        <button id = "skip-reason81" class = "skip-btn">MS Office</button>
                        <button id = "skip-reason97" class = "skip-btn">MATLAB</button>
                        <button id = "skip-reason78" class = "skip-btn">OS</button>
                        <button id = "skip-reason64" class = "skip-btn">Python</button>
                        <button id = "skip-reason96" class = "skip-btn">TOC</button>
                        <button id = "skip-reason76" class = "skip-btn">Linux</button>
                        <div class="skip-lock">UNLOCK</div>
                    </div>
                    <div class="menu">
                        <button id = "ext-answer-btn" class = "ext-btn">ANSWER</button>
                        <button id = "ext-submit-btn" class = "ext-btn" style = "display: none">SUBMIT ANSWER</button>
                    </div>
                `;
document.getElementsByTagName("body")[0].appendChild(node);

// Get time left and log
var id = setInterval(function() {
	var data = JSON.parse(window.localStorage.jStorage);
	if (data.minutes == 0 && (data.seconds == "10" || data.seconds == "11")) {
		countdown.play();
	}
}, 1000);

if (JSON.parse(window.localStorage.jStorage).questionSkipSource == "a") {
	console.log("Answer button clicked");
	clearInterval(id);
	document.getElementById("ext-answer-btn").setAttribute("disabled", true);
	document.getElementById("ext-answer-btn").style.display = "none";
	document.getElementById("ext-submit-btn").style.display = "inline-block";
	let btns = Array.from(document.getElementsByClassName("skip-btn"));
	btns.forEach(element => {
		element.style.display = "none";
	});
	document.querySelector(".skip-lock").classList.add("locked");
	document.querySelector(".skip-lock").addEventListener("click", () => {
		document.querySelector(".skip-lock").classList.remove("locked");
		btns.forEach(element => {
			element.style.display = "inline-block";
		});
	});
}

// Button click events
document.getElementById("ext-exit-btn").addEventListener("click", function() {
	document.getElementById("skipQuestion-Leave").click();
});

// Add event listener to all skip buttons
let reasons = document.getElementsByClassName("skip-btn");
Array.from(reasons).forEach(reason => {
	reason.addEventListener("click", function(e) {
		let rid = event.target.id.substr(5);
		console.log(rid);
		document.getElementById("skipQuestion").click();
		document.getElementById("noSubKnowledge").click();
		document.getElementById(rid).click();
		document.getElementsByClassName("btn-primary")[0].click();
	});
});

document.getElementById("ext-answer-btn").addEventListener("click", function() {
	document.getElementById("ques-ans-btn").click();
	let btns = Array.from(document.getElementsByClassName("skip-btn"));
	btns.forEach(element => {
		element.style.display = "none";
	});
	document.querySelector(".skip-lock").classList.add("locked");
	document.querySelector(".skip-lock").addEventListener("click", () => {
		document.querySelector(".skip-lock").classList.remove("locked");
		btns.forEach(element => {
			element.style.display = "inline-block";
		});
	});
});

document.getElementById("ext-submit-btn").addEventListener("click", () => {
	document.getElementById("submit-ans-btn").click();
	document.querySelectorAll(".primary.btn-lg.btn-primary")[1].click();
});

document.getElementById("ques-ans-btn").addEventListener("click", function() {
	clearInterval(id);
	document.getElementById("ext-answer-btn").setAttribute("disabled", true);
	document.getElementById("ext-answer-btn").style.display = "none";
	document.getElementById("ext-submit-btn").style.display = "inline-block";
	document.getElementById("extension-box").style.background = "black";
});

document.getElementById("skip-reason60").focus();
