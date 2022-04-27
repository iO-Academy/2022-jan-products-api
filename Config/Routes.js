<<<<<<< HEAD
const DbService = require('../Services/DbService')
const ProductController= require("../Controllers/ProductController");
=======
const ProductController = require("../Controllers/ProductController");
>>>>>>> main

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
<<<<<<< HEAD
=======
    app.get('/products/:SKU', ProductController.getSingleProduct)
    app.put('/products/:SKU', ProductController.updateStockLevel)
>>>>>>> main
}

module.exports = routes;
