var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ReviewSchema = new mongoose.Schema({

  user: {
    //reference the id from the user collection
  },
    postedOn: {
      type: Date
    //  the date defaults to now
    },
    rating: {
      type: Number,
      required: true,
      // the number rating must fall between 1 and 5
    },
    review: {
      type: String
    }

});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
