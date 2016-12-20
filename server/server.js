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

// require('./routes.js')(app, express);

// mongoose.connect('mongodb://localhost/mvp');

app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'exteded': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(port);
console.log('App listening on port ' + port);


// app.get('/', function(request, response) {
//   response.sendfile('./client/index.html');
// });

// SCHEMAS ========================================
var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

var ClassSchema = new mongoose.Schema({
  teacherName: String,
  name: String
});

var StudentSchema = new mongoose.Schema({
  className: String,
  firstName: String,
  lastName: String,
  average: Number,
  referrals: Number
});

var User = mongoose.model('users', UserSchema);
var Classroom = mongoose.model('classrooms', ClassSchema);
var Student = mongoose.model('students', StudentSchema);

// ROUTES =======================================
var Q = require('q');

    // USERS ====================================
var createUser = Q.nbind(User.create, User);
var findUser = Q.nbind(User.findOne, User);

app.post('/api/users/signup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('IN POST ROUTE - CREATE USER');

  createUser({
    username: username,
    password: password
  })
    .then(function(user) {
      console.log(user);
      res.send('/classes.html');
    });
});

app.post('/api/users/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('IN POST ROUTE - LOGIN');

  findUser({username: username})
    .then(function(user) {
      console.log('FOUND USER', user);
      res.send(user);

    });
});
    // CLASSES ==================================
var createClass = Q.nbind(Classroom.create, Classroom);
var getClasses = Q.nbind(Classroom.find, Classroom);

app.post('/api/classrooms/newclass', function(req, res, next) {
  console.log('HERE');
  var className = req.body.name;
  var teacherName = req.body.teacher;
  console.log('CREATING CLASS');
  createClass({
    teacherName: teacherName,
    name: className
  })
    .then(function(newClass) {
      console.log('NEW CLASS CREATED', newClass);
      getClasses({teacherName: teacherName})
        .then(function(classes) {
          res.json(classes);
        });
    });
});

app.post('/api/classrooms/classes', function(req, res, next) {
  var teacherName = req.body.teacher;
  getClasses({teacherName: teacherName})
    .then(function(classes) {
      console.log('FOUND CLASSES ', classes);
      res.json(classes);
    });
});
