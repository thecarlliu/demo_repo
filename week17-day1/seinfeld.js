// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "seinfled_db"
});
connection.connect();

var app = express();

function coolSort(array){
    var temp;
    for (i=0;i<array.length;i++) {
        if (array[i].coolness_points < array[i+1]) {

            array[i] = array[i+1];
        }
    }
}

app.get("/cast", function(req, res) {
//displays all actors and data ordered by their id's
    connection.query("SELECT * FROM actors order by id", function(err, res) {
        var html = "<h1>Actors Ordered Y ID</h1>";
        html+="<ul>";
        for (i=0;i<res.length;i++){
            html+="<li><p> ID: " + res[i].id +"</p>";
            html+="<p> Name: "+res[i].actor_name+"</p>";
            html+="<p> Coolness Points: "+res[i].coolness_points+"</p>";
            html+="<p> Attitude: "+res[i].attitude+"</p></li>";
        }
        html+="</ul>";
        res.send(html);
    });
});

app.get("/coolness-chart", function(req, res) {
//displays all actors and data ordered by their coolness points
    displayArray = [];
    connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, res) {
        var html = "<h1>Actors Ordered Y ID</h1>";
        html+="<ul>";
        for (i=0;i<res.length;i++){
            html+="<li><p> ID: " + res[i].id +"</p>";
            html+="<p> Name: "+res[i].actor_name+"</p>";
            html+="<p> Coolness Points: "+res[i].coolness_points+"</p>";
            html+="<p> Attitude: "+res[i].attitude+"</p></li>";
        }
        html+="</ul>";
        res.send(html);
    });
});

app.get("/attitude-chart/:att", function(req, res) {
    var attitude = req.params.att;

    switch(attitude) {
        case "attitude1":
            break;
        case "attitude2":
            break;
        case "attitude3":
            break;
        case "attitude4":
            break;
    }
});
// Initiate the listener.
app.listen(3002);
console.log("server is working..");