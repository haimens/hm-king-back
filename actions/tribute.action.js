const coreConn = require('../services/core.conn');


const func = require('od-utility');

class VNTributeAction {

    static async registerTributeRate(params, body, query) {
        try {
            return coreConn.coreRequest(
                'POST',
                ['tribute', 'rate'],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async findTributeRateList(params, body, query) {
        try {
            return coreConn.coreRequest(
                'GET',
                ['tribute', 'all', 'rate'],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyTributeRateDetail(params, body, query) {
        try {
            const {tribute_rate_token} = params;
            return coreConn.coreRequest(
                'PATCH',
                ['tribute', 'rate', tribute_rate_token], {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }


    static async findTributeDetailList(params, body, query) {
        try {
            const {realm_token} = params;
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            return coreConn.coreRequest(
                'GET',
                ['tribute', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async registerTributeDetail(params, body, query) {
        try {
            const {realm_token} = params;
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');

            return coreConn.coreRequest(
                'POST',
                ['tribute', 'detail', realm_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNTributeAction;