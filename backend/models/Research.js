const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  category: String,
  filePath: String,
  publicationDate: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Research', ResearchSchema);