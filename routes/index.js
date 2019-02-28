var express = require('express');
var router = express.Router();
var User = require('../models/users');


// send a friendly greeting for the root route
router.get('/', (req, res) => {
  //return res.send('Welcome to the Course Review API, Buckle up!');
  return res.render('index', { title: 'Home' });
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
          // console.log(User.find());
          // return res.render('output', { title: 'Test page' })
          return res.render('profile', { title: 'Profile', name: user.fullName, address: user.emailAddress, password: user.password });
        }
      });


});


// router.get('/profile', mid.requiresLogin, function(req, res, next) {
//   User.findById(req.session.userId)
//       .exec(function (error, user) {
//         if (error) {
//           return next(error);
//         } else {
//           return res.render('profile', { title: 'Profile', name: user.name, favorite: user.favoriteBook });
//         }
//       });
// });


/* PUT PUT PUT PUT PUT PUT  */
router.post('/api/users201', function(req, res, next){
  res.send("Creates a user, sets the Location header to '/', and returns no content");
});

module.exports = router;
