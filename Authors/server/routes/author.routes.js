const AuthorController = require("../controllers/author.controller")

module.exports = (app) =>{
    app.get("/api/authors", AuthorController.getProducts);
    app.get("/api/authors/:id", AuthorController.getProductById);
    app.post("/api/authors/create", AuthorController.createProduct);
    app.put("/api/authors/:id", AuthorController.updateProduct);
    app.delete("/api/authors/:id", AuthorController.deleteProduct);
}