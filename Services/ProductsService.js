const getAllProducts = async (connection) => {
    let result = await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
    return result
}

const updateProduct = async(connection, SKU, name, price, stockLevel) => {

    let query = 'UPDATE `products` SET '

    if (typeof name !== 'undefined') {
        query += '`name` = ' + "'" + name + "'"
    }
    if (typeof price !== 'undefined') {
        query += ', `price` = ' + "'" + price + "' "
    }
    if (typeof stockLevel !== 'undefined') {
        query += ', `stock_level` = ' + "'" + stockLevel + "' "
    }

    query += 'WHERE `SKU` = ' + "'" + SKU + "'"

    console.log(query)

     // return await connection.query("UPDATE `products` SET `name` = 'Crocs Pink S9' WHERE `SKU` = 'CRO-9-PIN'")

}

// updateProduct([], 'CRO-TST-3', 'Crocs Test S13', '60.22', 5)
updateProduct([], 'CRO-TST-3')
