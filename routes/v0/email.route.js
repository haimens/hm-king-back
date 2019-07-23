const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNEmailAction = require('../../actions/email.action');


router.post('/send/lord/:realm_token/:lord_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNEmailAction.sendEmailToLord(
                req.params, req.body, req.query, req.king.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;