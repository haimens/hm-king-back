const express = require('express');
const router = express.Router();

const VNLordAction = require('../../actions/lord.action');

const func = require('od-utility');


router.post('/detail/:realm_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNLordAction.registerLordInRealm(req.params, req.body, req.query),
            "REGISTER LORD SUCCESS"
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/all/detail/system', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNLordAction.findLordListInSystem(req.params, req.body, req.query),
            "LORD LIST FOUND"
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/all/detail/realm/:realm_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNLordAction.findLordListInRealm(req.params, req.body, req.query),
            "LORD LIST FOUND"
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:lord_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNLordAction.modifyLordDetail(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;