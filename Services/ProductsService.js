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

const deleteSingleProduct = async (connection, sku) => {
    return await connection.query('DELETE FROM `products` WHERE `SKU` =' + `'${sku}';`)
}

const updateSingleStockLevel = async (connection, sku, stock_level) => {
    let response
    sku && stock_level ?
        response = await connection.query('UPDATE `products` SET `stock_level` = ' + `'${stock_level}'` + 'WHERE `SKU` = ' + `'${sku}'`)
        : response = false
    return response
}

const generateUpdateProductQuery = (name, price, stockLevel, sku) => {
    let query = false
    let updateCounter = 0
    if(sku){
        query = 'UPDATE `products` SET '
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
    }

    return updateCounter > 0 ? query : false
}

const updateSingleProduct = async(connection, query) => {
    return await connection.query(query)
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.deleteSingleProduct = deleteSingleProduct
module.exports.updateSingleStockLevel = updateSingleStockLevel
module.exports.generateUpdateProductQuery = generateUpdateProductQuery
module.exports.updateSingleProduct = updateSingleProduct


