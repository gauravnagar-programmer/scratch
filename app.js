const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');
const db = require('./config/mongoose-connection');
const index = require('./routers/index');
const ownerRouter = require('./routers/ownerRouter');
const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter');
const session = require('express-session');
const flash = require('connect-flash');
const { Console } = require('console');
require('dotenv').config();

app.set('view engine','ejs'); 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use(
  session({
  resave : false,
  saveUninitialized : false,
  secret : process.env.SESSION_SECRET_KEY
})
)
app.use(flash())


app.use('/owners', ownerRouter);
app.use('/',index) 
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000);