//Import the model into this controller file

const Author = require("../models/author.model");
//Create an object to export

module.exports = {
  getAuthors: (req, res) => {
    Author.find({})
      .then((allAuthors) => {
        //providing an empty ^ object tells the route to get all in the information
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: `Something went wrong with findAll`, error: err.errors })
      );
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with create", error: err.errors })
      );
  },
  getAuthorById: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        console.log(author);
        res.json(author);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with findOne", error: err.errors })
      );
  },
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((author) => {
        console.log(author);
        res.json(author);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with deleteOne", error: err.errors })
      );
  },
  updateAuthor: (req, res) => {
    Author.updateOne({ _id: req.params.id }, req.body, {
      new: true,//this returns the updated movie on update
      runValidators: true,//this will run validators on update in the database
    })
      .then((author) => {
        console.log(author);
        res.json(author);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with updateOne", error: err.errors })
      );
  },
}; 