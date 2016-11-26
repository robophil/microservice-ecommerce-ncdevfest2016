var express = require('express')
var app = express()
var cote = require('cote')
var customer = new cote.Requester({name: 'customer'})
var payment = 0

app.get('/', function (req, res) {
  return res.send('Microservices black friday sales. 80% off all product')
})

app.get('/payment', function (req, res) {
    customer.send({type: 'validatePayment', no: ++payment}, function(status){
        res.send(status)
    })
})

app.listen(2000, function () {
  console.log('Microservices ecommerce app listening on port 2000!')
})

customer.on('ready', function(){
    console.log('customer service is ready')
});