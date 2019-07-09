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


router.get('/all/detail/realm/:realm_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTributeAction.findTributeDetailList(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.post('/detail/:realm_token', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNTributeAction.registerTributeDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


router.get('/sum/realm/:realm_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTributeAction.findTributeSum(
                req.params, req.body, req.query
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:realm_token/:invoice_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTributeAction.modifyTributeDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;
