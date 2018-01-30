process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

var arg1 = parseFloat(process.argv[2]);
var arg2 = parseFloat(process.argv[3]);

if (arg1 == arg2) {
	console.log("true");
}
else {
	console.log("false");
}
if (arg1%7 == 0 && arg2%7 == 0) {
	console.log("both are multiples of 7");
}
else {
	console.log("one or neither are multiples of 7");
}