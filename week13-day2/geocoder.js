var geocoder = require("geocoder");
var input = process.argv;
var string = [];

for (i=2;i<input.length;i++) {
    string.push(input[i]);
}

string = JSON.stringify(string);

geocoder.geocode(string, function (err, data) {
    console.log(JSON.stringify(data));
});