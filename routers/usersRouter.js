const express = require('express');
const routes  = express.Router();
const {registerUser} = require('../controllers/userAuothentification');
const {loginUser} = require('../controllers/userAuothentification');
const {logout} = require('../controllers/userAuothentification');

routes.get('/',(req,res)=>{
  res.send('hey');
});
routes.post('/register',registerUser);

routes.post('/login',loginUser)
routes.get('/logout',logout)

module.exports = routes;