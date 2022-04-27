const DataCheckers = require('../Services/SanitiseValidateService')

describe('sanitiseSku', () => {

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseSku()).toBe(false)
    })

    test('Sanitise SKU Success', () => {
        expect(DataCheckers.sanitiseSku('CRO-9-BLA')).toBe('CRO-9-BLA')
    })

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseSku('123456789101112')).toBe(false)
    })

    test('Sanitise SKU Malformed', () => {
        expect(DataCheckers.sanitiseSku([{}])).toBe(false)
    })

})

describe('sanitiseStockLevel', () => {

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel()).toBe(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel(-4)).toBe(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel(10001)).toBe(false)
    })

    test('Sanitise Stock Level Success', () => {
        expect(DataCheckers.sanitiseStockLevel('9')).toBe(9)
    })

    test('Sanitise Stock Level Malformed', () => {
        expect(DataCheckers.sanitiseStockLevel('test string')).toBe(false)
    })
})

describe('sanitisePrice', () => {

    test('sanitisePrice success', () => {
        expect(DataCheckers.sanitisePrice('50.56')).toBe(50.56)
    })

    test('sanitisePrice Failure', () => {
        expect(DataCheckers.sanitisePrice('string')).toBe(false)
    })

    test('sanitisePrice Malformed', () => {
        expect(DataCheckers.sanitisePrice([])).toBe(false)
    })
})

describe('sanitiseName', () => {

    test('sanitiseName success', () => {
        const name = 'Crocs Blue S8'
        expect(DataCheckers.sanitiseName(name)).toBe('Crocs Blue S8')
    })

    test('sanitiseName failure too small', () => {
        const name = ''
        expect(DataCheckers.sanitiseName(name)).toBe(false)
    })

    test('sanitiseName failure too big', () => {
        const name = 'UyfAY4U03tPjopfit08NAafpJyxdC3tenaqs1VmgKsU3Wuiyo0S'
        expect(DataCheckers.sanitiseName(name)).toBe(false)
    })

    test('sanitiseName malformed', () => {
        const name = 1234
        expect(DataCheckers.sanitiseName(name)).toBe(false)
    })

})
