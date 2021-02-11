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

  person_qualification:{
    type: String
  },
  date_of_birth:{
    type: Date
  },
  marital_status:{
    type: String
  },
  person_hobby:{
    type: String
  }
},{
    collection: 'person'
});

module.exports = mongoose.model('Business', Business);