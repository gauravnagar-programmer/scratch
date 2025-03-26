const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
  fullName : String,
  email : String,
  password : String,
  carts : {
    type : Array,
    default : []
  },
  isadmin : Boolean,
  orders : {
    type : Array,
    default : []
  },
  contact : Number,
  picture : String

});

module.exports = mongoose.model('user',userSchema);