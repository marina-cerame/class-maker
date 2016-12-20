var mongoose = require('mongoose');

var ClassSchema = new mongoose.Schema({
  name: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});
