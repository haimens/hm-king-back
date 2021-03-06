const coreConn = require('../services/core.conn');


class VNEmailAction {


    static async sendEmailToLord(params, body, query, auth) {
        const {realm_token, lord_token} = params;
        return await coreConn.coreRequest(
            'POST',
            ['email', 'send', 'lord', realm_token, lord_token],
            {}, {}, body
        );
    }

    static async sendEmailWithRealm(params, body, query, auth) {
        const {realm_token} = params;
        return await coreConn.coreRequest(
            'POST',
            ['email', 'send', 'realm', realm_token],
            {}, {}, body
        );
    }
}

module.exports = VNEmailAction;