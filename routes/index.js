var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values = ["hey ", "hoi", "gotit", "never", "kuch nahi"]

  const person = {name: "harshdf" , admin : false }
  res.render('index', { values , person
   });
});

module.exports = router;
