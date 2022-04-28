const ProductController = require("../Controllers/ProductController");
const InvalidRoutController = require('../Controllers/InvalidRouteController')

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
    app.post('/products', ProductController.addSingleProduct)
    app.put('/products', InvalidRoutController.invalidRoute)
    app.delete('/products', InvalidRoutController.invalidRoute)

    app.get('/products/:SKU', ProductController.getSingleProduct)
    app.post('/products/:SKU', InvalidRoutController.invalidRoute)
    app.put('/products/:SKU', ProductController.updateSingleProduct)
    app.delete('/products/:SKU', ProductController.deleteSingleProduct)

    app.get('/products/stock/:SKU', InvalidRoutController.invalidRoute)
    app.post('/products/stock/:SKU', InvalidRoutController.invalidRoute)
    app.put('/products/stock/:SKU', ProductController.updateStockLevel)
    app.delete('/products/stock/:SKU', InvalidRoutController.invalidRoute)
}

module.exports = routes;