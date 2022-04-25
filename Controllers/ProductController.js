const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");

let getAllProducts = async(req, res) => {
    let connection = await DbService()
    let products = await ProductService.getAllProducts(connection)
    products.length > 0
        ? apiResponse = JsonResponseService(products, true, 'Success', 200)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

let addSingleProduct = async(req, res) => {
    let connection = await DbService()
    console.log(req.body)
    let sku = req.body.SKU
    let name = req.body.name
    let price = req.body.price
    let stock_level = req.body.stock_level
    let products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)

}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct

