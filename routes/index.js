var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
  req.header('Access-Control-Allow-Origin', '*')
  res.render('index',{
    message:req.query.m})
});

module.exports = router;
