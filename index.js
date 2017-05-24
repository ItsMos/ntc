const express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Welcome to NTC offical website');
  console.log('incoming GET to /');
});

app.listen(app.get('port'), function() {
  console.log('Express server running on port', app.get('port'));
});
