const mongoose = require('mongoose');

let ownerSchema = mongoose.Schema({
  fullName : String,
  email : String,
  password : String,
  products : {
    type : Array,
    default : []
  },
  picture : String

});

module.exports = mongoose.model('owner',ownerSchema);