var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Book = sequelize.define(
  "book",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: { type: Sequelize.STRING },
    author: { type: Sequelize.STRING },
    genre: { type: Sequelize.STRING },
    pages: { type: Sequelize.INTEGER }
  },
  {
    timestamps: false
  }
);

Book.sync();

module.exports = Book;
