const DataCheckers = require('../Services/SanitiseValidateService')

describe('Sanitise & Validate SKU', () => {

    test('Sanitise & Validate SKU Failure', () => {
        expect(DataCheckers.sanitiseAndValidateSku()).toBe(false)
    })

    test('Sanitise & Validate SKU Success', () => {
        expect(DataCheckers.sanitiseAndValidateSku('CRO-9-BLA')).toBe('CRO-9-BLA')
    })

    test('Sanitise & Validate SKU Failure', () => {
        expect(DataCheckers.sanitiseAndValidateSku('123456789101112')).toBe(false)
    })

    test('Sanitise & Validate SKU Malformed', () => {
        expect(DataCheckers.sanitiseAndValidateSku([{}])).toBe(false)
    })

})

describe('Sanitise & Validate Stock Level', () => {

    test('Sanitise & Validate Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel()).toBe(false)
    })

    test('Sanitise & Validate Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel(-4)).toBe(false)
    })

    test('Sanitise & Validate Stock Level Failure', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel(10001)).toBe(false)
    })

    test('Sanitise & Validate Stock Level Success', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel('9')).toBe(9)
    })

    test('Sanitise & Validate Stock Level Malformed', () => {
        expect(DataCheckers.sanitiseAndValidateStockLevel('test string')).toBe(false)
    })
})

describe('Sanitise & Validate Price', () => {

    test('Sanitise & Validate Price success', () => {
        expect(DataCheckers.sanitiseAndValidatePrice('50.56')).toBe(50.56)
    })

    test('Sanitise & Validate Price Failure', () => {
        expect(DataCheckers.sanitiseAndValidatePrice('string')).toBe(false)
    })

    test('Sanitise & Validate Price Malformed', () => {
        expect(DataCheckers.sanitiseAndValidatePrice([])).toBe(false)
    })
})

describe('Sanitise & Validate Name', () => {

    test('Sanitise & Validate Name success', () => {
        const name = 'Crocs Blue S8'
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe('Crocs Blue S8')
    })

    test('Sanitise & Validate Name failure too small', () => {
        const name = ''
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

    test('Sanitise & Validate Name failure too big', () => {
        const name = 'UyfAY4U03tPjopfit08NAafpJyxdC3tenaqs1VmgKsU3Wuiyo0S'
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

    test('Sanitise & Validate Name malformed', () => {
        const name = 1234
        expect(DataCheckers.sanitiseAndValidateName(name)).toBe(false)
    })

})
