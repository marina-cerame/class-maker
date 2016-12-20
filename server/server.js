var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, function(error) {
  if (error) {
    console.log('MONGO URI ERROR', error);
  } else {
    console.log('CONNECTED TO MONGO URI');
  }
});

// mongoose.connect('mongodb://localhost/mvp');

// app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'exteded': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(port);
console.log('App listening on port ' + port);


// app.get('/', function(request, response) {
//   response.sendfile('./client/index.html');
// });
