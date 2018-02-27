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

app.get("/cast", function(req, res) {
//displays all actors and data ordered by their id's
    connection.query("SELECT * FROM actors order by id", function(err, res) {
        var html = "<h1>Actors Ordered by ID</h1>";
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
    connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, res) {
        var html = "<h1>Actors Ordered by Coolness</h1>";
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
    connection.query("SELECT * FROM actors WHERE attitude=?", [attitude], function(err, res) {
        var html = "<h1>Actors with an Attitude of "+attitude+"</h1>";
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

// Initiate the listener.
app.listen(3002);
console.log("server is working..");