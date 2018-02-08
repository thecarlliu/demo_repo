var weather = require("weather-js");

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

module.exports = userSearch;