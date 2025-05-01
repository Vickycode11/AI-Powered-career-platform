const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  responses: { type: Object, required: true },
  analyzedResults: { type: Object, required: true },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
