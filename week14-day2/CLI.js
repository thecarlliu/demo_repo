var weatherAdmin = require("./weatherAdmin");

var access = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

var myAdmin = new weatherAdmin();

if (access === "user") {
    myAdmin.getData();
}
else {
    myAdmin.newUserSearch(name, location);
}