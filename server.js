var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/build'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server Up');
});

module.exports = server;

