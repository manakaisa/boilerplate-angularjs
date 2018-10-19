var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var publicDir = (process.env.MODE === 'production') ? 'release' : 'src';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, publicDir)));

app.use('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, publicDir + '/index.html'));
});

module.exports = app;
