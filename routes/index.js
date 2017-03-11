var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var readFile = require('../departure.json')
router.get('/departure', function (req, res) {
    var con = '';
    readFile.departures.forEach(function (item) {
        con +=` <h1>${item.id}</h1>
         <h1>${item.prn}</h1>
        <h1>${item.flightno}</h1>
       <h1>${item.src}</h1>
        <h1>${item.dest}</h1>
        <h1>${item.gate}</h1>
        <h1>${item.etd}</h1>`;

    })

    res.send(`${con}`);
});
module.exports = router;
