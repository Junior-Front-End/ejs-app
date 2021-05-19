var express = require('express');
var router = express.Router(); 
const jwt = require('jsonwebtoken');
const userData = require('../../data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var token = req.query.token || req.body.token;

  if (!token) { 
    return res.redirect('/login');
  }

  // jwt.verify
  jwt.verify(token, 
    process.env.JWT_SECRET, 
    function (err, user) {

    if (err || user.userId !== userData.userId){ 
      return res.redirect('/login')
    } 
    // if
    return res.render('index',{
        pageTitle: 'dashboard',
        pageID: 'dashboard'
    });
    //return 

  });
});

module.exports = router;
