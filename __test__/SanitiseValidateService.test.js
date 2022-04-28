const DataCheckers = require('../Services/SanitiseValidateService')

describe('sanitiseSku', () => {

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseAndValidateSku()).toBe(false)
    })

    test('Sanitise SKU Success', () => {
        expect(DataCheckers.sanitiseAndValidateSku('CRO-9-BLA')).toBe('CRO-9-BLA')
    })

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseAndValidateSku('123456789101112')).toBe(false)
    })

    test('Sanitise SKU Malformed', () => {
        expect(DataCheckers.sanitiseAndValidateSku([{}])).toBe(false)
    })

})

describe('sanitiseStockLevel', () => {

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel()).toBe(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel(-4)).toBe(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel(10001)).toBe(false)
    })

    test('Sanitise Stock Level Success', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel('9')).toBe(9)
    })

    test('Sanitise Stock Level Malformed', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel('test string')).toBe(false)
    })
})

describe('sanitisePrice', () => {

    test('sanitisePrice success', () => {
        expect(DataCheckers.sanitiseAndValidatePrice('50.56')).toBe(50.56)
    })

    test('sanitisePrice Failure', () => {
        expect(DataCheckers.sanitiseAndValidatePrice('string')).toBe(false)
    })

    test('sanitisePrice Malformed', () => {
        expect(DataCheckers.sanitiseAndValidatePrice([])).toBe(false)
    })
})

describe('sanitiseName', () => {

    test('sanitiseName success', () => {
        const name = 'Crocs Blue S8'
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe('Crocs Blue S8')
    })

    test('sanitiseName failure too small', () => {
        const name = ''
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

    test('sanitiseName failure too big', () => {
        const name = 'UyfAY4U03tPjopfit08NAafpJyxdC3tenaqs1VmgKsU3Wuiyo0S'
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

    test('sanitiseName malformed', () => {
        const name = 1234
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

})
