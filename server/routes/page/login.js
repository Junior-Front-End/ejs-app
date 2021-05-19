var express = require('express');
var router = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  return res.render('index',{
    pageTitle: 'Login',
    pageID: 'login'
  });
  
});

module.exports = router;
