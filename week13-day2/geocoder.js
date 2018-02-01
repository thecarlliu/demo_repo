var inquirer = require("inquirer");

var geocoder = require("geocoder");

inquirer.prompt([
    // Here we create a basic text prompt.
    {
        type: "input",
        message: "Where do you want to go?",
        name: "location"
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    }
    ])
.then (function(inquirerResponse) {
    if (inquirerResponse.confirm) {
        var input = inquirerResponse.location;
        var string = JSON.stringify(input);

        geocoder.geocode(string, function (err, data) {
            console.log("Here's info on your destination:\n"+JSON.stringify(data));
        });
    }
    else {
        console.log("Decide already!");
    }
});

//version without inquirer
//geocoder.geocode(process.argv.slice(2).join(" "), function (err, data) {
//     console.log(JSON.stringify(data));
// };