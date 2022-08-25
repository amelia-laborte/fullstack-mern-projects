const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Authors name is required"],
      minlength:[3, 'Must be 3 characters long']
      //you can add min or max length characters as maxlength:[2, `whatever error message you want to be generated']
    }
    //If you want to store an image, just store the link because the actual image should not be stored in a database.
    //If you want to have a default option you write it like default: `N/A`
    //enum is a option field that will have a select field on the front end
    //If a tue or false option is wanted, type: Boolean, default: false,
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
