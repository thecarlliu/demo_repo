var weatherAdmin = require("./weatherAdmin");

var access = process.argv[2];
var name = process.argv[3];
var location = String(process.argv.splice(4));
location = location.replace(",", " ");

var myAdmin = new weatherAdmin();

if (access === "admin") {
    myAdmin.getData();
}
else if (access === "user") {
    myAdmin.newUserSearch(name, location);
}