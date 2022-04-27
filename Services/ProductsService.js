const getAllProducts = async (connection) => {
    return await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
}

const addSingleProduct = async(connection, sku, name, price, stock_level) => {
    return await connection.query('INSERT `products` (`SKU`, `name`, `price`,`stock_level`) VALUES' + `('${sku}', '${name}', '${price}', '${stock_level}');`)
}

const getSingleProduct = async (connection, SKU) => {
    const verifiedSKU = async (SKU) => {
        const regex = /[A-Za-z]{3}-[0-9A-Za-z]{1,3}-[A-Za-z]{3}/
        const normaliseString = SKU.toUpperCase()
        let response
        if (normaliseString.length > 11 || normaliseString.length < 9){
            response = ''
        } else {
            regex.test(SKU)
                ? response = await connection.query('SELECT `SKU`, `name`, `price`, `stock_level` FROM `products` WHERE `SKU` =' + `'${normaliseString}'`)
                : response = ''
        }
        return response
    }
    return verifiedSKU(SKU)
}


module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct

