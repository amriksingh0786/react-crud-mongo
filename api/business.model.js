const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  },
  person_qualification:{
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);