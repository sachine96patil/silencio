var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var readFile = require('../departure.json');

headers = {
    'Content-Type': 'application/json'
   // 'Content-Length': dataString.length
};
router.get('/departure', function (req, res) {
  /*  var con = '{ "departures": [';

    readFile.departures.forEach(function (item) {
        con +=` {"id":"${item.id}",
         "prn":"${item.prn}",
        "flightno":"${item.flightno}",
         "item":"${item.src}",
        "dest":"${item.dest}",
        "gate":"${item.gate}",
        "etd":"${item.etd}"}`;

    })
   // con=JSON.parse(con);
    con+=']}';
   // res.send(`${con}`);*/
    res.json(readFile);
});
module.exports = router;
