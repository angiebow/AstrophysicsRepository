const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  // Item schema definition
});

module.exports = mongoose.model('Item', ItemSchema);