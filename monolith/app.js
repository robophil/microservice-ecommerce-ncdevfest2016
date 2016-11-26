var express = require('express')
var app = express()

var payment = 0;

app.get('/', function (req, res) {
  return res.send('Monolith ==> black friday sales. 70% off all product')
})

app.get('/payment', function (req, res) {
    setTimeout(function(){
        console.log(`Payment no #${++payment}\n`)
        return res.end('Monolith ==> payment was successful')
    }, 5000)
})


app.listen(3000, function () {
  console.log('Monolith ecommerce app listening on port 3000! \n')
})