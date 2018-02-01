//takes a command line input, formats and then looks up geolocation data for the input given.
//returns mass of data in a string.

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

//shortcut
//geocoder.geocode(process.argv.slice(2).join(" "), function (err, data) {
//     console.log(JSON.stringify(data));
// };