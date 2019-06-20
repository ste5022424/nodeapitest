var fs = require('fs');

module.exports = function (app) {
    fs.readdirSync(__dirname + '/controller').forEach(function (file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./controller/' + name)(app);
    });
}