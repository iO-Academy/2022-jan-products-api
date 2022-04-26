const DataCheckers = require('../Services/SanitiseValidateService')

describe('sanitisePrice', () => {

    test('sanitisePrice success', () => {
        expect(DataCheckers.sanitisePrice('50.56')).toBe(50.56)
    })

})