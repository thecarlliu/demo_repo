// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
}, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
}, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:characters?", function(req, res) { //api is just placeholder
    // What does this code do?
    var chosen = req.params.characters;

    if (chosen) {
        console.log(chosen);

        // What does this code do?
        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }
        //so if the user input in the url after localhost:3000/api/ matches any of the routeNames in our characters array, then the json for the character that the input matches, will be returned.

        return res.send("No character found");
    }

    // What does this code do?
    return res.json(characters);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});