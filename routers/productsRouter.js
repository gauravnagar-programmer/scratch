const express = require('express');
const routes  = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');

routes.post('/create',upload.single('image'),async (req,res)=>{
 try{ let{price,name, discount ,bgcolor,panelcolor ,textcolor}=  req.body;

  let product = await productModel.create({
    image : req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor
  });
    req.flash("productsuccess", "product created Successfully.")
   res.redirect('/owners/admin')
}catch(err){
    res.send(err.message)
  }
});

module.exports = routes;