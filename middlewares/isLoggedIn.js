const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async (req,res,next)=>{
  if(!req.cookies.token){
     res.flash('error','you logged in first !');
  return    res.redirect('/')
  }
  try{
   let decode = jwt.verify(req.cookies.token,process.env.JWT_KEY);
    let user = await userModel
    .findOne({email : decode.email})
    .select("-password");

    res.user = user

    next();
  }catch{
    res.flash("error","something went wrong");
    return res.redirect('/')
  }
  
}