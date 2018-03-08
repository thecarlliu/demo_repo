// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var query = "SELECT * FROM chirps";

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    var query = "INSERT INTO chirps (author, body) VALUES (?,?)";

    connection.query(query, [req.body.author, req.body.body], function(err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};
