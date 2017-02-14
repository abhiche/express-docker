var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
  res.status(200).json({status: 'ok'});
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  res.send(err);
});

module.exports = app;
