const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // User schema definition
});

module.exports = mongoose.model('User', UserSchema);