var http = require('http')
var options = {
    host: 'localhost',
    port: 2000,
    path: '/payment'
};

setInterval(function () {
    http.get(options, function (res) {
        console.log("Got response: " + res.statusCode);
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}, 1800)