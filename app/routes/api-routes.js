var Book = require("../models/book.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/:book", function(req, res) {
    if (req.params.book) {
      Book.findAll({
        where: {
          title: req.params.book
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/genre/:genre", function(req, res) {
    if (req.params.genre) {
      Book.findAll({
        where: {
          genre: req.params.genre
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/author/:author", function(req, res) {
    if (req.params.author) {
      Book.findAll({
        where: {
          author: req.params.author
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $gte: 300
        }
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $lte: 150
        }
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  //POST ROUTE
  app.post("/api/new", function(req, res) {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    });
  });

  //DELETE ROUTE
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  //end module.exports
};
