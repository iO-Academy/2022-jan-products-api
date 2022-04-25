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


module.exports.getAllProducts = getAllProducts

