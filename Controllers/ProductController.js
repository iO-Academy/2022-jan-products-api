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
    const products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
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
    const product = await ProductService.getSingleProduct(connection, sku)

    if (sku && product.length > 0) {
        let apiResponse
        let updateCounter = 0
        let query = 'UPDATE `products` SET '

        if (name) {
            query += '`name` = ' + `'${name}' , `
            updateCounter++
        }
        if (price) {
            query += '`price` = ' + `'${price}' , `
            updateCounter++
        }
        if (stockLevel) {
            query += '`stock_level` = ' + `'${stockLevel}' , `
            updateCounter++
        }
        query = query.substring(0, (query.length - 2))
        query += 'WHERE `SKU` = ' + "'" + sku + "'"

        if (updateCounter > 0) {
            const product = await ProductService.updateSingleProduct(connection,query)
            apiResponse = JsonResponseService(product, true, 'Success', 201)
        } else {
            apiResponse = JsonResponseService()
        }
        res.json(apiResponse)
    } else {
        res.json(JsonResponseService())
    }
}



module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.deleteSingleProduct = deleteSingleProduct
module.exports.updateStockLevel = updateStockLevel
module.exports.updateSingleProduct = updateSingleProduct
