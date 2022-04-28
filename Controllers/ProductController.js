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

const updateStockLevel = async(req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseSku(req.params.SKU)
    const stock_level = DataCheckers.sanitiseStockLevel(req.body.stock_level)
    const product = await ProductService.updateSingleStockLevel(connection, sku, stock_level)
    let apiResponse
    product.affectedRows > 0
        ? apiResponse = JsonResponseService(product, true, 'Success', 201)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

const updateSingleProduct = async (req, res) => {
    const connection = await DbService()
    const sku = DataCheckers.sanitiseSku(req.params.SKU)
    const stockLevel = DataCheckers.sanitiseStockLevel(req.body.stock_level)
    const name = DataCheckers.sanitiseName(req.body.name)
    const price = DataCheckers.sanitisePrice(req.body.price)
    const product = await ProductService.getSingleProduct(connection, sku)

    if (sku && product.length > 0) {
        let apiResponse
        let updateCounter = 0
        let query = 'UPDATE `products` SET '

        if (name) {
            query += '`name` = ' + "'" + name + "' , "
            updateCounter++
        }
        if (price) {
            query += '`price` = ' + "'" + price + "' , "
            updateCounter++
        }
        if (stockLevel) {
            query += '`stock_level` = ' + "'" + stockLevel + "' , "
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

const invalidRoute = (req, res) => {
    res.json(JsonResponseService())
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.updateStockLevel = updateStockLevel
module.exports.updateSingleProduct = updateSingleProduct
module.exports.invalidRoute = invalidRoute


