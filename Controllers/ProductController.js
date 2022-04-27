const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
const DataCheckers = require("../Services/SanitiseValidateService");

const getAllProducts = async(req, res) => {
    const connection = await DbService()
    const products = await ProductService.getAllProducts(connection)
    let apiResponse
    products.length > 0
        ? apiResponse = JsonResponseService(products, true, 'Success', 200)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

const addSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseSku(req.body.SKU)
    const name = DataCheckers.sanitiseName(req.body.name)
    const price = DataCheckers.sanitisePrice(req.body.price)
    const stock_level = DataCheckers.sanitiseStockLevel(req.body.stock_level)
    const tableData = await ProductService.getSingleProduct(connection, sku)
    if(tableData.length === 0) {
        if (sku && name && price && stock_level) {
            const products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
            res.json(JsonResponseService(products, true, 'Success', 201))
        } else {
            res.json(JsonResponseService())
        }
    } else {
        res.json(JsonResponseService())
    }
}

const getSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseSku(req.params.SKU)
    const product = await ProductService.getSingleProduct(connection, sku)
    let apiResponse
    product.length > 0
        ? apiResponse = JsonResponseService(product, true, 'Success', 200)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

const updateStockLevel = async(re, res) => {
    const connection = await DbService()
    const SKU = req.params.SKU
    const stock_level = 1
    const updateProduct = await ProductService.updateSingleProduct(connection, SKU, stock_level)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.updateStockLevel = updateStockLevel


