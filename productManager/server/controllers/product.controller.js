//Import the model into this controller file

const Product = require("../models/product.model");
//Create an object to export

module.exports = {
  getProducts: (req, res) => {
    Product.find({})
      .then((allProducts) => {
        //providing an empty ^ object tells the route to get all in the information
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: `Something went wrong with findAll`, error: err.errors })
      );
  },
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with create", error: err.errors })
      );
  },
  getProductById: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        console.log(product);
        res.json(product);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with findOne", error: err.errors })
      );
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((product) => {
        console.log(product);
        res.json(product);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with deleteOne", error: err.errors })
      );
  },
  updateProduct: (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, {
      new: true,//this returns the updated movie on update
      runValidators: true,//this will run validators on update in the database
    })
      .then((product) => {
        console.log(product);
        res.json(product);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: "Something went wrong with updateOne", error: err.errors })
      );
  },
};
