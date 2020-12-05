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
}

const undoLogInterception = () => {
    console.log = console.newLog.bind(console);
    console.log = console.logFunction;
}

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
}

// Run after page has loaded completely
window.onload = () => {
    undoLogInterception();
    document.dispatchEvent(new CustomEvent('qidRead', { detail: getQid() }));
}