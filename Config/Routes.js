const ProductController = require("../Controllers/ProductController");

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
    app.get('/products/:SKU', ProductController.getSingleProduct)
    app.delete('/products/:SKU', ProductController.deleteSingleProduct)

}

module.exports = routes;
