var express = require('express');
var router = express.Router();


// send a friendly greeting for the root route
router.get('/', (req, res) => {
  return res.send('Welcome to the Course Review API, Buckle up!');
});


module.exports = router;