const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/allUserDetail`);

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