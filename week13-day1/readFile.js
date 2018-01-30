var fs = require("fs");

fs.readFile("best-things.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	}

	var newData = data.replace(/,/g, "\n");

	console.log(newData);
});
