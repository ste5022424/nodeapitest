module.exports = (req, res, next) => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken');
    const config = require('config');

    const token = req.headers.authorization;
    if (token === '' || token === undefined) {
        return res.send({ msg: 'No auth!' });
    }

    jwt.verify(token, config.jwt.secret, (err, decode) => {
        if (err) {
            res.send({ msg: 'tokne error' });
        } else {
            req.memberid = decode.data.memberid;
            req.groupid = decode.data.groupid;
        }
    });

    next()
}