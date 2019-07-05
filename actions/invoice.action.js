const coreConn = require('../services/core.conn');
const func = require('od-utility');

class VNInvoiceAction {

    static async registerInvoice(params, body, query) {
        try {
            const {realm_token} = params;

            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            return coreConn.coreRequest(
                'POST',
                ['invoice', 'detail', realm_token]
            );


        } catch (e) {
            throw e;
        }
    }


    static async findInvoiceListWithRealm(params, body, query) {
        try {
            const {realm_token} = params;

            if (!realm_token) func.throwErrorWithMissingParam('realm_token');

            return coreConn.coreRequest(
                'GET',
                ['invoice', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }

    static async findInvoiceListInSystem(params, body, query) {
        try {
            return coreConn.coreRequest(
                'GET',
                ['invoice', 'all', 'detail', 'system'],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNInvoiceAction;