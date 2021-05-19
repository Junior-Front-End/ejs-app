require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
var app = express();

// 
app.locals.siteTitle = 'Ejs App'

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/verify', require('./routes/api/verify'));
app.use('/api/signin', require('./routes/api/signin'));
app.use('/', require('./routes/page/home'));
app.use('/dashboard', require('./routes/page/dashboard')); 
app.use('/login', require('./routes/page/login')); 

// catch 404 
app.use(function(req, res, next) {
  res.status(404);
  res.render('index',{
    pageTitle: '404',
    url: req.url,
    pageID: '404',
  })
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
