const ProductController= require("../Controllers/ProductController");

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
    app.put('/products', ProductController.invalidRoute)
    app.delete('/products', ProductController.invalidRoute)

    app.get('/products/:SKU', ProductController.getSingleProduct)
    app.post('/products/:SKU', ProductController.invalidRoute)
    app.put('/products/:SKU', ProductController.updateSingleProduct)
    app.delete('/products/:SKU', ProductController.deleteSingleProduct)

    app.get('/products/stock/:SKU', ProductController.invalidRoute)
    app.post('/products/stock/:SKU', ProductController.invalidRoute)
    app.put('/products/stock/:SKU', ProductController.updateStockLevel)
    app.delete('/products/stock/:SKU', ProductController.invalidRoute)
}

module.exports = routes;