var userController = require('./users/userController.js');

module.exports = function (app, express) {
  app.post('/api/users/signup', userController.signup);
};
