var fs = require("fs");
var weather = require("weather-js");

var access = process.argv[2];
var name = process.argv[3];
var location = process.argv.splice(4);

function userSearch(name, location) {
    var date = new Date();
    this.name = name;
    this.location = String(location);
    this.date = date.getMonth()+"-"+date.getDate();
    this.getWeather = function() {
        weather.find({search: location, degreeType: "F"}, function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
            }
        });
    }
}

if (access === "user") {
    var input = new userSearch(name, location);
    input.getWeather();
    fs.appendFile("log.txt", JSON.stringify(input)+",", function(err) {
        if (err) {
            return console.log(err);
        }
        else {
            console.log(input);
        }
    });
}
else if (access === "admin") {
    fs.readFile("log.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        else {
            console.log("["+data+"]");
        }
    });
}