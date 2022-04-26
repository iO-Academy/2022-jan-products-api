const SanitiseValidateService = require('../Services/SanitiseValidateService').sanitiseSku()

describe('sanitiseSku', () => {

    test('Sanitise SKU Failure', () => {
        expect(SanitiseSku()).toEqual(false)
    })

})
