'use strict';

var express = require('express');
var router = express.Router();
//var moment = require('moment');

//get all books and set pagination offset to zero
router.get('/api/users200', function(req, res, next) {
  res.send("Returns the currently authenticated user");
});

/* PUT Edit/change book details. PUT PUT PUT PUT PUT  */
router.post('/api/users201', function(req, res, next){
  res.send("Creates a user, sets the Location header to '/', and returns no content");
});




module.exports = router;
