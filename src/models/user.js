import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telegram: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;
