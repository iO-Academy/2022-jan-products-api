const DbService = require("../Services/DbService");
const ProductService = require("../Services/ProductsService");
const JsonResponseService = require("../Services/JsonResponseService");
<<<<<<< HEAD
const {sanitiseSku, sanitiseName, sanitiseStockLevel, sanitisePrice} = require("../Services/SanitiseValidateService");

let getAllProducts = async(req, res) => {
    let connection = await DbService()
    let products = await ProductService.getAllProducts(connection)
=======
const DataCheckers = require("../Services/SanitiseValidateService");

const getAllProducts = async(req, res) => {
    const connection = await DbService()
    const products = await ProductService.getAllProducts(connection)
    let apiResponse
>>>>>>> main
    products.length > 0
        ? apiResponse = JsonResponseService(products, true, 'Success', 200)
        : apiResponse = JsonResponseService()
    res.json(apiResponse)
}

<<<<<<< HEAD
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
=======
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
>>>>>>> main
    res.json(apiResponse)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
<<<<<<< HEAD
=======
module.exports.getSingleProduct = getSingleProduct
module.exports.updateStockLevel = updateStockLevel

>>>>>>> main

