const DbService = require("./DbService");
const ProductService = require("./ProductsService");
let connection = await DbService()
let sku = req.body.SKU
let name = req.body.name
let price = req.body.price
let stock_level = req.body.stock_level
let products = await ProductService.addSingleProduct(connection, sku, name, price, stock_level)
console.log(products)


const sanitiseSku = (sku) => {
    const regex = /[A-Za-z]{3}-[0-9A-Za-z]{1,3}-[A-Za-z]{3}/
    if (typeof sku === 'string'
        && sku.length >= 9
        && regex.test(sku)
        && sky.length <= 11) {
        const normaliseString = sku.toUpperCase()
        return normaliseString
    } else {
        return false
    }

}

const sanitiseName = (name) => {
    if (typeof name === 'string'
    && name.length > 0
    && name.length < 50) {
        return name.replace(/[^\w\s]/gi, '')
    }
    else {
        return false
    }
}

const sanitisePrice = (price) => {
const regex = / ^\d+(,\d{3})*(\.\d{1,2})?$ /gm
    if (regex.test(price)
    && )
}



module.exports.sanitiseSku = sanitiseSku
module.exports.sanitiseName = sanitiseName