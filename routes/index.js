var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{
    message:req.query.m})
});

module.exports = router;
