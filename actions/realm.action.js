const func = require('od-utility');
const coreConn = require('../services/core.conn');


class VNRealmAction {

    static async registerRealmInSystem(params, body, query) {
        try {
            return await coreConn.coreRequest(
                'POST',
                ['realm', 'detail'],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findRealmListInSystem(params, body, query) {
        try {
            return await coreConn.coreRequest(
                'GET',
                ['realm', 'all', 'detail', 'system'],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNRealmAction;