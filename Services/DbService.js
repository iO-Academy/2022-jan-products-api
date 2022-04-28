const mysql = require('promise-mysql')

const DbService = async() => {
        const db = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'lsd_products'
    })
        return db;
}

module.exports = DbService;