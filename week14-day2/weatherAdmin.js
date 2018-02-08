var fs = require("fs");
var userSearch = require("./userSearch");

var weatherAdmin = function() {
    this.newUserSearch = function(name, location) {
        var input = new userSearch(name, location);
        input.getWeather();
        var text = "Name: "+input.name+" Location: "+input.location+" Date: "+input.date+"\n";
        fs.appendFile("log.txt", text, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    };
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            else {
                var arr = data.split("\n");
                for (i = 0; i < arr.length - 1; i++) {
                    console.log(arr[i]);
                }
            }
        });
    }
};

module.exports = weatherAdmin;