const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
const DataCheckers = require("../Services/SanitiseValidateService");

const getAllProducts = async(req, res) => {
    const connection = await DbService()
    const products = await ProductService.getAllProducts(connection)
    let apiResponse = products.length > 0
                        ? JsonResponseService(products, true, 'Success', 200)
                        : JsonResponseService()
    res.json(apiResponse)
}

const addSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseAndValidateSku(req.body.SKU)
    const name = DataCheckers.sanitiseAndValidateName(req.body.name)
    const price = DataCheckers.sanitiseAndValidatePrice(req.body.price)
    const stock_level = DataCheckers.sanitiseAndValidateStockLevel(req.body.stock_level)
    const tableData = await ProductService.getSingleProduct(connection, sku)
    console.log(tableData.length)
    const products = tableData.length === 0
                        ? await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
                        :   ''
    let apiResponse = tableData.length === 0 && sku && name && price && stock_level
                        ? JsonResponseService(products, true, 'Success', 201)
                        : JsonResponseService()
    res.json(apiResponse)
}

const getSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseAndValidateSku(req.params.SKU)
    const product = await ProductService.getSingleProduct(connection, sku)
    let apiResponse = product.length > 0
        ? JsonResponseService(product, true, 'Success', 200)
        : JsonResponseService()
    res.json(apiResponse)
}

const deleteSingleProduct = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseAndValidateSku(req.params.SKU)
    const singleProduct = await ProductService.getSingleProduct(connection, sku)
    const deleteProduct = singleProduct.length !== 0
        ? await ProductService.deleteSingleProduct(connection, sku)
        : false
    let apiResponse = deleteProduct
        ? JsonResponseService(deleteProduct, true, 'Success', 204)
        : JsonResponseService()
    res.json(apiResponse)
}

const updateStockLevel = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseAndValidateSku(req.params.SKU)
    const stock_level = DataCheckers.sanitiseAndValidateStockLevel(req.body.stock_level)
    const singleProduct = await ProductService.getSingleProduct(connection, sku)
    const product = singleProduct.length !== 0
        ? await ProductService.updateSingleStockLevel(connection, sku, stock_level)
        : false
    let apiResponse = product.affectedRows > 0
        ? JsonResponseService(product, true, 'Success', 201)
        : JsonResponseService()
    res.json(apiResponse)
}

const updateSingleProduct = async (req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseAndValidateSku(req.params.SKU)
    const stockLevel = DataCheckers.sanitiseAndValidateStockLevel(req.body.stock_level)
    const name = DataCheckers.sanitiseAndValidateName(req.body.name)
    const price = DataCheckers.sanitiseAndValidatePrice(req.body.price)
    let validSku = await ProductService.getSingleProduct(connection, sku)
    const query = sku && validSku.length > 0
            ? ProductService.generateUpdateProductQuery(name, price, stockLevel, sku)
            : false
    const product = query
            ? await ProductService.updateSingleProduct(connection,query)
            : false
    const apiResponse = query
            ? JsonResponseService(product, true, 'Success', 201)
            : JsonResponseService()

    res.json(apiResponse)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.deleteSingleProduct = deleteSingleProduct
module.exports.updateStockLevel = updateStockLevel
module.exports.updateSingleProduct = updateSingleProduct
