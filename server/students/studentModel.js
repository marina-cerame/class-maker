var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  average: Number,
  referrals: Number,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});
