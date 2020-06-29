var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact-Me' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About-Me' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});


module.exports = router;
