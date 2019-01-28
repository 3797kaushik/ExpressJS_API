'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  name: {
    type: 'login',
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

// Export the model
module.exports = mongoose.model('login', loginSchema);
