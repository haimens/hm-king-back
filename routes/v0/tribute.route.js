const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNTributeAction = require('../../actions/tribute.action');


router.post('/rate', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNTributeAction.registerTributeRate(
                req.params, req.body, req.query
            ),
            'TRIBUTE RATE REGISTERED SUCCESS'
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.get('/all/rate', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTributeAction.findTributeRateList(
                req.params, req.body, req.query
            ),
            'TRIBUTE RATE LIST FOUND'
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/rate/:tribute_rate_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTributeAction.modifyTributeRateDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;
