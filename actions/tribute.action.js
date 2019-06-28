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

}

module.exports = VNTributeAction;