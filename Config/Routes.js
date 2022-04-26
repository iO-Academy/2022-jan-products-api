const ProductController= require("../Controllers/ProductController");

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
}

module.exports = routes;
