const ProductService = require('../Services/ProductsService')
const DataCheckers = require('../Services/SanitiseValidateService')

describe('Generate Query', () => {
    test('Generate Query Success', () => {
        const name = 'Crocs Blue S13'
        const price = 90.90
        const stockLevel = 13
        const sku = 'CRO-13-BLU'
        expect(ProductService.generateUpdateProductQuery(name, price, stockLevel, sku))
            .toBe('UPDATE `products` SET `name` = \'Crocs Blue S13\' , `price` = \'90.9\' , `stock_level` = \'13\' WHERE `SKU` = \'CRO-13-BLU\'')
    })

    test('Generate Query Failure incorrect SKU', () => {
        const name = DataCheckers.sanitiseAndValidateName('Crocs Blue S13')
        const price = DataCheckers.sanitiseAndValidatePrice(90.90)
        const stockLevel = DataCheckers.sanitiseAndValidateStockLevel(13)
        const sku = DataCheckers.sanitiseAndValidateSku('CRO-13-BL')
        expect(ProductService.generateUpdateProductQuery(name, price, stockLevel, sku))
            .toBe(false)
    })

    test('Generate Query Malformed array as SKU', () => {
        const name = DataCheckers.sanitiseAndValidateName('Crocs Blue S13')
        const price = DataCheckers.sanitiseAndValidatePrice(90.90)
        const stockLevel = DataCheckers.sanitiseAndValidateStockLevel(13)
        const sku = DataCheckers.sanitiseAndValidateSku([])
        expect(ProductService.generateUpdateProductQuery(name, price, stockLevel, sku))
            .toBe(false)
    })
})