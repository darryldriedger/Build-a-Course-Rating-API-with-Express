var express = require('express');
var router = express.Router();
var User = require('../models/users');


// send a friendly greeting for the root route
router.get('/', (req, res) => {
  //return res.send('Welcome to the Course Review API, Buckle up!');
  console.log(__dirname);
  return res.render('index', { title: 'Home' });
  // res.sendFile(__dirname + '/index.html');
});

//get
router.get('/api/users200', function(req, res, next) {
  // res.render('output', { title: 'Test page' })
  // res.send("Returns the currently authenticated user");
  User.find()
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          // res.send("this is tester text");
          // return res.render('output', { title: 'Test page' })
          return res.render('profile', { title: 'Profile', name: user.fullName, address: user.emailAddress, password: user.password });
        }
      });


});

router.get('/profile', function(req, res, next) {
  User.find()
      .exec(function (error, results) {
        if (error) {
          return next(error);
        } else {
          let users = results;
          console.log(users);
          // const user = user[0];
        return res.render('profile', { title: 'Users', users: users });
          // return res.render('profile', { title: 'Profile'})
        res.send("this is the profile page text");
        }
      });
});


/* PUT PUT PUT PUT PUT PUT  */
router.post('/api/users201', function(req, res, next){
  res.send("Creates a user, sets the Location header to '/', and returns no content");
});

module.exports = router;
