var cote = require('cote')
var paymentResponder = new cote.Responder({
    name: 'payment responder'
});


paymentResponder.on('validatePayment', function (req, cb) {
    setTimeout(function () {
        console.log(`Payment no #${req.no}\n`)
        cb('microservice ==> payment was successful');
    }, 5000)
})