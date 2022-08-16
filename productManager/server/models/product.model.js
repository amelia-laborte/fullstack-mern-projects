//This is where you create the schema with the documents inside

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title for your product is required"],
      //you can add min or max length characters as maxlength:[2, `whatever error message you want to be generated']
    },
    price: {
      type: String,
      required: [true, "Your product needs a price"],
    },
    description: {
      type: String,
      required: [true, "A description of your product is required"],
    },
    //If you want to store an image, just store the link because the actual image should not be stored in a database.
    //If you want to have a default option you write it like default: `N/A`
    //enum is a option field that will have a select field on the front end
    //If a tue or false option is wanted, type: Boolean, default: false,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

//Database Schema is created with validations