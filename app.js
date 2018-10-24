var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var rootDir = (process.env.MODE === 'production') ? 'dist' : 'src';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, rootDir)));

app.use('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, rootDir, 'index.html'));
});

module.exports = app;
