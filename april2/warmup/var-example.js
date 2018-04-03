log(name); // output: ?

const tinyize = function(name) {
    log(name); // output: ?

    log(myName); // output: ?
    const myName = "Tiny " + name + "!";
    log(myName); // output: ?

    return myName;
};

const name = tinyize("Rick");
log(name); // output: ?
log(myName); // output: ?

log(i); // output: ?
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        log(i); // output: ?
    }, 100);
}
log(i); // output: ?

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
    const callerLine = new Error().stack.split("\n")[2];
    const lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
    console.log("Line " + lineNumber + ": " + string);
}
