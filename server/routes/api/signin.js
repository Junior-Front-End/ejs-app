const express = require('express')
const router = express.Router()
const utils = require('../../utils/utils');
const userData = require('../../data/data');

//
router.post('/', function (req, res) {

  const user = req.body.username;
  const pass = req.body.password;

  if (!user || !pass) {
    var m = 'Error 400: Username or Password required';
    return res.json({m:m});
  }

  if (user !== userData.username || pass !== userData.password) {
    var m = "Error 401: Username or Password is Wrong.";
    return res.json({m: m}); 
  }
 
  var token = utils.generateToken(userData);  
  return res.json({token:token});

});


// EXPORT
module.exports = router
