const getAllProducts = async (connection) => {
    return await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
}

const addSingleProduct = async(connection, sku, name, price, stock_level) => {
    return await connection.query('INSERT `products` (`SKU`, `name`, `price`,`stock_level`) VALUES' + `('${sku}', '${name}', '${price}', '${stock_level}');`)
}

const getSingleProduct = async (connection, sku) => {
    let response
    sku ? response = await connection.query('SELECT `SKU`, `name`, `price`, `stock_level` FROM `products` WHERE `SKU` =' + `'${sku}' LIMIT 1`)
        : response = false
    return response
}


module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct

