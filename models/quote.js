const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);