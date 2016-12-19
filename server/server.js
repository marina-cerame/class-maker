var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://heroku_r9k66dzj:gv6pufkskrqnmc7srbr6haop7h@ds139448.mlab.com:39448/heroku_r9k66dzj', function(error) {
  if (error) {
    console.log('MONGO URI ERROR', error);
  } else {
    console.log('CONNECTED TO MONGO URI');
  }
});

// mongoose.connect('mongodb://localhost/mvp');

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'exteded': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(8080);
console.log('App listening on port 8080');

app.get('/', function(request, response) {
  response.sendfile('./client/index.html');
});
