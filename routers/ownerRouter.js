const express = require('express');
const routes  = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV ==="development"){
  routes.post('/create',async (req,res)=>{
    let owners = await ownerModel.find();
    let {fullname,email,password} =req.body;
    if(owners.length>0){
      return res
      .status(501)
      .send("you can't have permision")
    }
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password
    })
    res.status(200).send(createdOwner)
  });
  }

routes.get('/admin',(req,res)=>{
  let success = req.flash('productsuccess');
  res.render('createproduct',{success});
});



module.exports = routes;