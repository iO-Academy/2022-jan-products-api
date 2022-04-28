const DbService = require('../Services/DbService')
const ProductController= require("../Controllers/ProductController");

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
    app.put('/products', ProductController.invalidRoute)
    app.delete('/products', ProductController.invalidRoute)

    app.get('/products/:SKU', ProductController.getSingleProduct)
    app.put('/products/:SKU', ProductController.updateSingleProduct)
    app.post('/products/:SKU', ProductController.invalidRoute)

    app.get('/products/stock/:SKU', ProductController.invalidRoute)
    app.put('/products/stock/:SKU', ProductController.updateStockLevel)
    app.post('/products/stock/:SKU', ProductController.invalidRoute)
    app.delete('/products/stock/:SKU', ProductController.invalidRoute)
}

module.exports = routes;
