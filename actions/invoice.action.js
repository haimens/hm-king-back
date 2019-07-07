const coreConn = require('../services/core.conn');
const func = require('od-utility');

class VNInvoiceAction {

    static async registerInvoice(params, body, query) {
        try {
            const {realm_token} = params;

            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            return await coreConn.coreRequest(
                'POST',
                ['invoice', 'detail', realm_token],
                {}, {}, body
            );


        } catch (e) {
            throw e;
        }
    }


    static async findInvoiceListWithRealm(params, body, query) {
        try {
            const {realm_token} = params;

            if (!realm_token) func.throwErrorWithMissingParam('realm_token');

            return await coreConn.coreRequest(
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
            return await coreConn.coreRequest(
                'GET',
                ['invoice', 'all', 'detail', 'system'],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyInvoiceDetail(params, body, query) {
        try {
            const {realm_token, invoice_token} = params;
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            if (!invoice_token) func.throwErrorWithMissingParam('invoice_token');
            return await coreConn.coreRequest(
                'PATCH',
                ['invoice', 'detail', realm_token, invoice_token]
            );
        } catch (e) {
            throw e;
        }
    }

    static async findInvoiceSumWithRealm(params, body, query) {
        try {
            const {realm_token} = params;
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');

            return await coreConn.coreRequest(
                'GET',
                ['invoce', 'sum', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNInvoiceAction;