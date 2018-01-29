var bands = require("./bands.js").bands;

var input = process.argv[2];

if (input == "punk") {
	console.log(bands.punk);
}
else if (input == "rap") {
	console.log(bands.rap);
}
else if (input == "classic") {
	console.log(bands.classic);
}