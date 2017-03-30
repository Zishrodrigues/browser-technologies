var express = require('express');
var router = express.Router();
var data =  require('../../public/js/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacten', { data: personObjects });
  // console.log(data.personObjects, 'data');
});

module.exports = router;
