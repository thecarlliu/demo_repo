// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
app.get("/:operator?/:a?/:b?", function(req, res) {

    // Parameters are received from the URL
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var operation = req.params.operator;
    // Parameters are converted to integers

    // Initialize the result variable to send later
    var result;
    // Switch statement chooses operation based on the operation parameter.
    switch (operation) {
        // BONUS - How could you use * + etc. inside the app.get()?
        case "add":
            // Add your logic here. Pun intended.
            result = a+b;
            break;
        case "subtract":
            // Subtract logic
            result = a-b;
            break;
        case "multiply":
            // Multiply
            result = a*b;
            break;
        case "divide":
            // Divide
            result = a/b;
            break;
        default:
            // Handle anything that isn't specified
            result =
                "Sorry! The only valid operations are add, subtract, multiply, and divide.";
    }

    // We return the result back to the user in the form of a string
    res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
console.log("server is working..");