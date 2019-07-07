const func = require('od-utility');

const coreConn = require('../services/core.conn');


class VNLordAction {


    static async registerLordInRealm(params, body, query) {
        try {

            const {realm_token} = params;
            return await coreConn.coreRequest(
                'POST',
                ['lord', 'detail', realm_token], {}, {}, body
            );


        } catch (e) {

            throw e;

        }
    }

    static async findLordListInRealm(params, body, query) {
        try {

            const {realm_token} = params;
            return await coreConn.coreRequest(
                'GET',
                ['lord', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async findLordListInSystem(params, body, query) {
        try {
            return await coreConn.coreRequest(
                'GET',
                ['lord', 'all', 'detail', 'system'],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyLordDetail(params, body, query) {
        try {
            const {lord_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['lord', 'detail', lord_token], {}, {}, body
            );


        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNLordAction;