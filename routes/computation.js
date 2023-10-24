var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    x=0
  if(req.query.x === undefined){
    x = Math.random(7);
  }else{
    x = req.query.x;
  }

  hypot = Math.hypot(x);
  ceil = Math.ceil(x);
  clz32 = Math.clz32(x);
  res.send("Hypotenuse applied to " + x + " is " + hypot+" ceil applied to" + x + " is " + ceil + "clz32 applied to "+ x + " is "+ clz32);
});

module.exports = router;
