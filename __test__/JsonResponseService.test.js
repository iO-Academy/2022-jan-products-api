const JsonResponseService = require('../Services/JsonResponseService')
<<<<<<< HEAD
=======
const DataCheckers = require('../Services/SanitiseValidateService')
>>>>>>> main

describe('JsonResponse', () => {

    test('JsonResponse failure', () => {
            expect(JsonResponseService()).toEqual({
                'data': [],
                'success': false,
                'message': 'Error',
                'status': 500
            })
        })
<<<<<<< HEAD
=======

>>>>>>> main
    test('JsonResponse success', () => {
        const data =
            [{
                "name": "Crocs Pink S9",
                "price": 50.5,
                "SKU": "CRO-9-PINK",
                "stock_level" : "8"
            }]

        expect(JsonResponseService(data, true, 'Success', 200)).toEqual({
            'data':
                [{
                    "name": "Crocs Pink S9",
                    "price": 50.5,
                    "SKU": "CRO-9-PINK",
                    "stock_level" : "8"
                }],
            'success': true,
            'message': 'Success',
            'status': 200
        })
    })
})