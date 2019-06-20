const log4js = require('log4js');
const config = require('config');

log4js.addLayout('json', function (config) {
    return function (logEvent) { return JSON.stringify(logEvent); }
});

log4js.shutdown(() => { });
log4js.configure(config.logger);
module.exports = log4js;