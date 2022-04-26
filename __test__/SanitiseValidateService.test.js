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

describe('sanitiseName', () => {
    test('sanitiseName success', () => {
        const name = 'Crocs Blue S8'
        expect(DataCheckers.sanitiseName(name)).toEqual('Crocs Blue S8')
    })

    test('sanitiseName failure too small', () => {
        const name = ''
        expect(DataCheckers.sanitiseName(name)).toEqual(false)
    })

    test('sanitiseName failure too big', () => {
        const name = 'UyfAY4U03tPjopfit08NAafpJyxdC3tenaqs1VmgKsU3Wuiyo0S'
        expect(DataCheckers.sanitiseName(name)).toEqual(false)
    })

    test('sanitiseName malformed', () => {
        const name = 1234
        expect(DataCheckers.sanitiseName(name)).toEqual(false)
    })
})

