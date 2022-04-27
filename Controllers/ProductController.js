const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
const {sanitiseSku, sanitiseName, sanitiseStockLevel, sanitisePrice} = require("../Services/SanitiseValidateService");

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
    const sku = sanitiseSku(req.body.SKU)
    const name = sanitiseName(req.body.name)
    const price = sanitisePrice(req.body.price)
    const stock_level = sanitiseStockLevel(req.body.stock_level)
    let apiResponse
    if (sku && name && price && stock_level) {
        const products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
         apiResponse = JsonResponseService(products, true, 'Success', 201)
    } else {
         apiResponse = JsonResponseService()
    }
    res.json(apiResponse)

}

const getSingleProduct = async(req, res) => {
    const connection = await DbService()
    const SKU = req.params.SKU
    const product = await ProductService.getSingleProduct(connection, SKU)
    let apiResponse
    product.length > 0
        ? apiResponse = JsonResponseService(product, true, 'Success', 200)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct


