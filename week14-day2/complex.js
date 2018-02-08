var fs = require("fs");
var weather = require("weather-js");

var access = process.argv[2];
var name = process.argv[3];
var location = String(process.argv.splice(4));
location = location.replace(",", " ");

function userSearch(name, location) {
    var date = new Date();
    this.name = name;
    this.location = String(location);
    this.date = date.getMonth()+1+"-"+date.getDate();
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
    fs.appendFile("log.txt", "Name: "+input.name+" Location: "+input.location+" Date: "+input.date+"\n", function(err) {
        if (err) {
            return console.log(err);
        }
    });
}
else if (access === "admin") {
    fs.readFile("log.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        else {
            var arr = data.split("\n");
            for (i=0;i<arr.length-1;i++) {
                console.log(arr[i]);
            }
        }
    });
}