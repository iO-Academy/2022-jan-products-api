const DataCheckers = require('../Services/SanitiseValidateService')


describe('sanitiseSku', () => {

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseSku()).toEqual(false)
    })

    test('Sanitise SKU Success', () => {
        expect(DataCheckers.sanitiseSku('CRO-9-BLA')).toEqual('CRO-9-BLA')
    })

    test('Sanitise SKU Failure', () => {
        expect(DataCheckers.sanitiseSku('123456789101112')).toEqual(false)
    })

    test('Sanitise SKU Malformed', () => {
        expect(DataCheckers.sanitiseSku([{}])).toEqual(false)
    })

})

describe('sanitiseStockLevel', () => {

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel()).toEqual(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel(-4)).toEqual(false)
    })

    test('Sanitise Stock Level Failure', () => {
        expect(DataCheckers.sanitiseStockLevel(10001)).toEqual(false)
    })

    test('Sanitise Stock Level Success', () => {
        expect(DataCheckers.sanitiseStockLevel('9')).toEqual(9)
    })

    test('Sanitise Stock Level Malformed', () => {
        expect(DataCheckers.sanitiseStockLevel('test string')).toEqual(false)
    })

})

