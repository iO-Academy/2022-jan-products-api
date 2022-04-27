<<<<<<< HEAD
=======
const DataCheckers = require('../Services/SanitiseValidateService')

>>>>>>> main
const getAllProducts = async (connection) => {
    return await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
}

const addSingleProduct = async(connection, sku, name, price, stock_level) => {
<<<<<<< HEAD
    return await connection.query('INSERT `product_lsd` (`SKU`, `name`, `price`,`stock_level`) VALUES' + `(${sku}, ${name}, ${price}, ${stock_level});`)
}

const updateSingleProduct = async(connection, SKU, name, price, stockLevel) => {

    if (typeof SKU === 'string'
        && SKU.length > 0
        && SKU.length < 15) {

        let query = 'UPDATE `products` SET '

        if (typeof name === 'string'
            && name.length < 50) {
            query += '`name` = ' + "'" + name + "' , "
        }
        if (typeof price === 'number') {
            query += '`price` = ' + "'" + price + "' "
        }
        if (typeof stockLevel === 'number'
            && stockLevel >= 0) {
            query += ', `stock_level` = ' + "'" + stockLevel + "' "
        }

        query += 'WHERE `SKU` = ' + "'" + SKU + "'"

        console.log(query)

        // return await connection.query("UPDATE `products` SET `name` = 'Crocs Pink S9' WHERE `SKU` = 'CRO-9-PIN'")
    }
}

module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.updateSingleProduct = updateSingleProduct

node_modules/.package-lock.json
=======
    return await connection.query('INSERT `products` (`SKU`, `name`, `price`,`stock_level`) VALUES' + `('${sku}', '${name}', '${price}', '${stock_level}');`)
}

const getSingleProduct = async (connection, sku) => {
    let response
    sku ? response = await connection.query('SELECT `SKU`, `name`, `price`, `stock_level` FROM `products` WHERE `SKU` =' + `'${sku}' LIMIT 1`)
        : response = false
    return response
}

const updateSingleStockLevel = async (connection, sku, stock_level) => {
    let response
    sku && stock_level ?
        response = await connection.query('UPDATE `products` SET `stock_level` = ' + `'${stock_level}'` + 'WHERE `SKU` = ' + `'${sku}'`)
        : response = false
    return response
}


module.exports.getAllProducts = getAllProducts
module.exports.addSingleProduct = addSingleProduct
module.exports.getSingleProduct = getSingleProduct
module.exports.updateSingleStockLevel = updateSingleStockLevel

>>>>>>> main
