const express = require('express');
const router = express();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model')

router.get('/',(req,res)=>{
  let error = req.flash("error");
  let registererror= req.flash('registererror');
  let loginerror= req.flash('loginerror');
  let passworderror= req.flash('passworderror');
  res.render('index',{error,registererror,loginerror,passworderror});
});

router.get('/shop',isLoggedIn,async (req,res)=>{
  let products = await productModel.find();
  res.render('shop',{products})
})

module.exports = router