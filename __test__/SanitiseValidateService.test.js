const DataCheckers = require('../Services/SanitiseValidateService')

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