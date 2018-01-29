process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

var operator = process.argv[2];
var first = parseFloat(process.argv[3]);
var second = parseFloat(process.argv[4]);

if (operator == "add") {
	var result = first + second;
	console.log(first+" plus "+second+" equals "+result);
}
else if (operator == "subtract") {
	var result = first - second;
	console.log(first+" minus "+second+" equals "+result);
}
else if (operator == "multiply") {
	var result = first * second;
	console.log(first+" times "+second+" equals "+result);
}
else if (operator == "divide") {
	var result = first / second;
	console.log(first+" divided by "+second+" equals "+result);
}
else if (operator == "remainder") {
	var result = first % second;
	console.log(first+" divided by "+second+" gives a remainder of "+result);
}