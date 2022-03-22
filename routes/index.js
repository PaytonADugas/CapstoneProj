var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/room', function(req, res, next){
  res.render('room', { title: 'Room 1'})
});

router.get('/pickCountry', function(req, res, next){
  res.render('pickCountry', { title: 'Pick Country Game'})
});

module.exports = router;
