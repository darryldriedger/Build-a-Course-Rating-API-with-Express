'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// mongodb connection
mongoose.connect("mongodb://localhost:27017/cours-api");
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));


// set our port
app.set('port', process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan('dev'));

// TODO add additional routes here

//include routes
var routes = require('../routes/index');
app.use('/', routes);
var usersRoute = require('../routes/users');
app.use('/users', usersRoute);
// // send a friendly greeting for the root route
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Welcome to the Course Review API'
//   });
// });


// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use(express.static(__dirname + '/../public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/../views');

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// uncomment this route in order to test the global error handler
// app.get('/error', function (req, res) {
//   throw new Error('Test error');
// });

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found'
  })
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
