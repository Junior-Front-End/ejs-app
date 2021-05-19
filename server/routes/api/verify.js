var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');  
const userData = require('../../data/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // check 
  var token = req.query.token 
  // jwt.verify
  jwt.verify(token, 
    process.env.JWT_SECRET, 
    function (err, user) {

    if (err || user.userId !== userData.userId){ 
      return res.json({
        data: 'token is expired or incorrect!'
      });
    } 
    return res.json({
      data: 'correctToken'
    });
    // return
  });
  // !jwt.verify
});

module.exports = router;
