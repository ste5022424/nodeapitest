const express = require('express');
const logger = require('./lib/logger');
const config = require('config');
const app = express();
const port = config.express.api.port;

// applog
const log = logger.getLogger('index');

//log.debug('start');
// Set Request log
app.use(logger.connectLogger(log, { level: 'auto' }));

// set routes
require('./routes')(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});