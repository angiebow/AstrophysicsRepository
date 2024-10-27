// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: [String],
});

module.exports = mongoose.model('User', UserSchema);