const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');
const db = require('./config/mongoose-connection');
const ownerRouter = require('./routers/ownerRouter');
const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));

app.use('/owners', ownerRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
 
app.listen(3000);