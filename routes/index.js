var express = require('express');
var router = express.Router();

var username = "";
var password1 = "";

/* GET login page. */
router.get('/', function (req, res, next) {
  res.redirect('/login');
});

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});


router.post('/index-post', (req, res, next) => {
  if (req.body.username === "" || req.body.password1 === "") {
    res.redirect('/login');
  } else {
    res.render('index');
  }
})

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index');
});

/* GET register page. */
router.get('/register', function (req, res, next) {
  res.render('register');
});

router.post('/register-post', function (req, res, next) {
  res.redirect('/register');
});

/* GET FAQ page. */
router.get('/faq', function (req, res, next) {
  res.render('faq');
});

/* GET TERMS page. */
router.get('/terms', function (req, res, next) {
  res.render('terms');
});

module.exports = router;