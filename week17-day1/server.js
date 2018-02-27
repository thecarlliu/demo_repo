var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: "vanilla", price: 10, awesomeness: 4},
    {name: "chocolate", price: 4, awesomness: 8},
    {name: "banana", price: 1, awesomeness: 1},
    {name: "greentea", price: 5, awesomeness: 7},
    {name: "jawbreakers", price: 6, awesomeness: 2}
];

app.get("/icecreams/:name?", function(req, res) {
    var flavor = req.params.name;
    for (i=0;i<icecreams.length;i++) {
        if (icecreams[i].name === flavor) {
            res.render("index", icecreams[i]);
        }
    }
});

app.get("/icecreams/", function(req, res) {
    res.render("index", {index: icecreams});
});

app.listen(port);
console.log("Server is ON...");