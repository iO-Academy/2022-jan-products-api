const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
const {sanitiseSku, sanitiseName, sanitiseStockLevel, sanitisePrice} = require("../Services/SanitiseValidateService");

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
    let sku = sanitiseSku(req.body.SKU)
    let name = sanitiseName(req.body.name)
    let price = sanitisePrice(req.body.price)
    let stock_level = sanitiseStockLevel(req.body.stock_level)
    if (sku && name && price && stock_level) {
        let products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
        apiResponse = JsonResponseService(products, true, 'Success', 201)
    } else {
        apiResponse = JsonResponseService()
    }
    res.json(apiResponse)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct

