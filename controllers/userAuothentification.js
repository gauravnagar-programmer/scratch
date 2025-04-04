const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');

module.exports.registerUser = async (req,res)=>{
  try{
    let {fullname,email,password} = req.body;
    let user = await userModel.findOne({email});
    if(user){
      req.flash("registererror", "This user already exists.");
      return res.redirect('/')
    } 
      bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password,salt,async (err,hash)=>{
        if(err){return res.send(err.message)}
        else{
          let user = await userModel.create({
            fullname,
            email,
            password :hash
          });
          let token = generateToken(user);
          res.cookie('token',token) 
          res.render('shop')
        
        }
      
      })
    })
   
  }
  catch(err){
    console.log(err.message)
  }
  
};

module.exports.loginUser = async (req,res)=>{
  let {email,password} = req.body;
  let user = await userModel.findOne({email : email});
  if(!user){
    req.flash("loginerror","invalid email or password")
    return res.redirect('/')
  }

  bcrypt.compare(password,user.password,(err,result)=>{
    if(result){
      let token = generateToken(user);
      res.cookie("token",token);
      res.render('shop')
    }
    else{
      req.flash("passworderror","invalid email or password")
     return res.redirect('/')
    }
  })
};

module.exports.logout=async (req,res)=>{
  res.cookie("token","");
  res.redirect('/');
}