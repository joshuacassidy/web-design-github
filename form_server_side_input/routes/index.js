var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', error: '' });
});


router.post("/thankyou", function(req, res, next) {
  var name = req.body.name
  var error = "You need to enter a name"
  if(name === '') {
    return res.render('index', { title: 'Express', error:error });
  }
  res.render('thankyou', {name:name})
})

module.exports = router;
