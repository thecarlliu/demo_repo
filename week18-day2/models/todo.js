// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// Creates a "Character" model that matches up with DB
var Todo = sequelize.define("todo", {
    // what the task entails
    text: Sequelize.STRING,
    // whether or not the task is complete
    complete: Sequelize.BOOLEAN
}, {
    timestamps: false
});

// Syncs with DB
Todo.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Todo;