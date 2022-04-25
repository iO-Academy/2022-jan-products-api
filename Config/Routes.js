const DbService = require('../Services/DbService')
const ProductController= require("../Controllers/ProductController");

function routes(app) {
    app.get('/products', ProductController.getAllProducts)
}

module.exports = routes;
