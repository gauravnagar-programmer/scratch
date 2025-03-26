const mongoose = require('mongoose');


let productSchema = mongoose.Schema({
  image : String,
  product : String,
  name : Number,
  discount : {
    type : Number,
    default : 0
  },
  bgcolor : String,
  panelcolor : String,
  textcolor : String

});

module.exports = mongoose.model('product',productSchema);