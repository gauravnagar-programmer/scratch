const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
  fullname : String,
  email : String,
  password : String,
  carts : {
    type : Array,
    default : []
  },
  orders : {
    type : Array,
    default : []
  },
  contact : Number,
  picture : String

});

module.exports = mongoose.model('user',userSchema);