const getAllProducts = async (connection) => {
    let result = await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
    return result
}

const updateProduct = async(connection, SKU, name, price, stockLevel) => {

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

updateProduct([], 'CRO-BLU-9', 'test crocs', 60.20, 2)
