var http = require("http");
var fs = require("fs");

var PORT = 63342;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/food":
            return fs.readFile(__dirname + "/food.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/css":
            return fs.readFile(__dirname + "/css.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        default:
            return fs.readFile(__dirname + "/index.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }
}