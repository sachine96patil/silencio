var express = require('express');
var router = express.Router();
var restful=require('node-restful');

var app=express();
 var mongoose=restful.mongoose;
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://db-username:db-password@ds129030.mlab.com:29030/silencio';
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', console.error.bind(console, 'MongoDB connection successful'));

var Resource = app.resource = restful.model('resource', mongoose.Schema({
    title: String,
    year: Number,
}))
    .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
   // res.sendFile(index.html);
});
var readFile = require('../departure.json');
var arrivaldata=require('../arrival.json');
var offerdata=require('../offers.json');
headers = {
    'Content-Type': 'application/json'
   // 'Content-Length': dataString.length
};
router.get('/departure', function (req, res) {
  /*  var con = '{ "departures": [';


   mongodb://sachinepatil:pass#mongo#96@ds129030.mlab.com:29030/silencio


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

router.get('/arrival',function(req,res){
    res.json(arrivaldata);
});

router.get('/offers',function(req,res){
    res.json(offerdata);
});

router.get('/AdminPanelArrival',function(req,res){
res.render('arrival');
});

router.get('/AdminPanelDeparture',function(req,res){
res.render('departure');
});

router.get('/Offer',function(req,res){
    res.render('Offers');
});
module.exports = router;
