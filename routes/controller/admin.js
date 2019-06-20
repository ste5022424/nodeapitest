module.exports = (app) => {

    const auth = require('../../middleware/auth');
    const config = require('config');
    const jwt = require('jsonwebtoken');

    app.post('/admin/auth', async (req, res) => {

        const signdata = {
            data: {
                memberid: 123456,
                groupid: 1
            },
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        };

        const token = jwt.sign(signdata, config.jwt.secret);
        res.send({ Token: token });
    });

    app.get('/admin/GetTokenData', auth, async (req, res) => {
        res.send({
            memberid: req.memberid,
            groupid: req.groupid,
            token: req.headers.authorization,
            msg: 'TokenOk'
        });
    });
}