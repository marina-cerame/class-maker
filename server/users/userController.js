var User = require('./userModel.js');

module.exports = {
  signup: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.create({
      username: username,
      password: password
    });
  }
};
