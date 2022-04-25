let getAllProducts = async (connection) => {
    let result = await connection.query("SELECT `name`, `price`, `SKU` FROM `products`;")
    return result
}

module.exports.getAllProducts = getAllProducts

