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

router.get('/error', (req, res) => {
  return res.render('error', { title: 'Error' });
});
router.get('/signup', (req, res) => {
  return res.render('signup', { title: 'signup' });
});
router.post('/signup', (req, res) => {
  return res.send("you are all signed up!");
});

//This post when there is a status code of 200
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

// //This post when there is a status code of 201 
// router.post('/api/users201', function(req, res, next) {
//   // res.render('output', { title: 'Test page' })
//   // res.send("Returns the currently authenticated user");
//   User.find()
//       .exec(function (error, user) {
//         if (error) {
//           return next(error);
//         } else {
//           // res.send("this is tester text");
//           // return res.render('output', { title: 'Test page' })
//           return res.render('profile', { title: 'Profile', name: user.fullName, address: user.emailAddress, password: user.password });
//         }
//       });


// });

router.get('/profile', function(req, res, next) {
  User.find()
      .exec(function (error, users) {
        if (error) {
          // res.redirect('error', {title: 'Error'})
          return next(error);
        } else {
          console.log(users);
        return res.render('profile', { title: 'Users', users: users });
        }
      });
});



// This is just a code snnippet taking from the user authorization course for reference
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







// // GET /register
// router.get('/register', mid.loggedOut, function(req, res, next) {
//   return res.render('register', { title: 'Sign Up' });
// });

// // POST /register
// router.post('/register', function(req, res, next) {
//   if (req.body.email &&
//     req.body.name &&
//     req.body.favoriteBook &&
//     req.body.password &&
//     req.body.confirmPassword) {

//       // confirm that user typed same password twice
//       if (req.body.password !== req.body.confirmPassword) {
//         var err = new Error('Passwords do not match.');
//         err.status = 400;
//         return next(err);
//       }

//       // create object with form input
//       var userData = {
//         email: req.body.email,
//         name: req.body.name,
//         favoriteBook: req.body.favoriteBook,
//         password: req.body.password
//       };

//       // use schema's `create` method to insert document into Mongo
//       User.create(userData, function (error, user) {
//         if (error) {
//           return next(error);
//         } else {
//           req.session.userId = user._id;
//           return res.redirect('/profile');
//         }
//       });

//     } else {
//       var err = new Error('All fields required.');
//       err.status = 400;
//       return next(err);
//     }
// })






/* PUT PUT PUT PUT PUT PUT  */
router.post('/api/users201', function(req, res, next){
  res.send("Creates a user, sets the Location header to '/', and returns no content");
});

module.exports = router;
