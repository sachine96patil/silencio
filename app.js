var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var restful=require('node-restful');
var mongoose=restful.mongoose;

var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(__dirname + '/views'));

app.use('/', index);
app.use('/users', users);
app.use('/departure', users);
app.use('/arrival', users);
app.use('/offers', users);
app.use('/resources', users);
app.use('/AdminPanelArrival',users);
app.use('/AdminPanelDeparture',users);
app.use('/Offers',users);
//app.use(express.static('departure/public'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
