var fs = require("fs");
var command = process.argv[2];

if (command == "total") {
	fs.readFile("bank.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		var arr = data.split(",").map(parseFloat);
		var result = 0;
		for (i=0;i<arr.length;i++) {
			result = result + arr[i];
		}
		console.log(result);
	});
}
else {
	var amt = process.argv[3];
	
	if (command == "deposit") {
		fs.appendFile("bank.txt", ", "+amt, function(err) {
			// If an error was experienced we say it.
			if (err) {
				console.log(err);
			}
			console.log("You deposited "+amt+" dollars.");
		});
	}
	if (command == "withdraw") {
		fs.appendFile("bank.txt", ", -"+amt, function(err) {
			// If an error was experienced we say it.
			if (err) {
				console.log(err);
			}
			console.log("You withdrew "+amt+" dollars.");
		});
	}
	if (command == "lotto") {
		var random = Math.floor(Math.random()*1000);
		if (random == 420) {
			var reward = amt*1000;
			fs.appendFile("bank.txt", ", "+reward, function(err) {
				if (err) {
					console.log(err);
				}
			});
			console.log("You won "+reward+" dollars! Prize has been added to your bank account.");
		}
		else {
			fs.appendFile("bank.txt", ", -"+amt, function(err) {
				if (err) {
					console.log(err);
				}
			});
			console.log("You gambled away "+amt+" dollars and won nothing! You should feel bad.");
		}
	}
}