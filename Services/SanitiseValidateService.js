const DataCheckers = {
    sanitiseSku: (sku) => {
        const regex = /[A-Za-z]{3}-[0-9A-Za-z]{1,3}-[A-Za-z]{3}/
        if (typeof sku === 'string'
            && sku.length >= 9
            && regex.test(sku)
            && sku.length <= 11) {
            const normaliseString = sku.toUpperCase()
            return normaliseString
        } else {
            return false
        }
    },

    sanitiseName: (name) => {
        if (typeof name === 'string'
            && name.length > 0
            && name.length < 50) {
            return name.replace(/[^\w\s]/gi, '')
        } else {
            return false
        }
    },

    sanitisePrice: (price) => {
        const regex = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/
        if (regex.test(price)) {
            return parseFloat(price)
        } else {
            return false
        }
    },

    sanitiseStockLevel: (stockLevel) => {
        const regex = /^\d+$/
        if (regex.test(stockLevel)
            && stockLevel.length > 0
            && stockLevel.length <= 4
            && parseInt(stockLevel) >= 0) {
            return parseInt(stockLevel)
        } else {
            return false
        }
    },
}

module.exports = DataCheckers