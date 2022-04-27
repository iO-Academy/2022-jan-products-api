const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
const DataCheckers = require("../Services/SanitiseValidateService");

const getAllProducts = async(req, res) => {
    const connection = await DbService()
    const products = await ProductService.getAllProducts(connection)

    const apiResponse = products.length > 0
        ? JsonResponseService(products, true, 'Success', 200)
        : JsonResponseService()

    res.json(apiResponse)
}

const addSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseSku(req.body.SKU)
    const name = DataCheckers.sanitiseName(req.body.name)
    const price = DataCheckers.sanitisePrice(req.body.price)
    const stock_level = DataCheckers.sanitiseStockLevel(req.body.stock_level)
        if (sku && name && price && stock_level) {
            const products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
            res.json(JsonResponseService(products, true, 'Success', 201))
        } else {
            res.json(JsonResponseService())
        }
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct

