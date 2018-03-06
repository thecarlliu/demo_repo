// Dependencies
// =============================================================

// Require the sequelize library
var library = require("../config/connection.js");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model
var Book = sequelize.define("book", {
    // title of book
    title: Sequelize.STRING,
    // name of author
    author: Sequelize.STRING,
    // genre
    genre: Sequelize.STRING,
    // number of pages
    pages: Sequelize.INTEGER
}, {
    timestamps: false
});
// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;
