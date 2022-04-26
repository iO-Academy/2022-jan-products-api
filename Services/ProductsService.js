const getAllProducts = async (connection) => {
    let result = await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
    return result

    return await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
}

const addSingleProduct = async(connection, sku, name, price, stock_level) => {
    return await connection.query('INSERT `product_lsd` (`SKU`, `name`, `price`,`stock_level`) VALUES' + `(${sku}, ${name}, ${price}, ${stock_level});`)
}

const updateSingleProduct = async(connection, SKU, name, price, stockLevel) => {

    if (typeof SKU === 'string'
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
