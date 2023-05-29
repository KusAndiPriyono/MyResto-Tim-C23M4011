// review / rating / createAt / ref to restaurant / ref to user
const mongoose = require('mongoose');
const Restaurant = require('./restaurantModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review cannot be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    restaurant: {
      type: mongoose.Schema.ObjectId,
      ref: 'Restaurant',
      required: [true, 'Review must belong to a restaurant.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ restaurant: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'restaurant',
  //   select: 'name',
  // }).populate({
  //   path: 'user',
  //   select: 'name photo',
  // });

  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (restaurantId) {
  const stats = await this.aggregate([
    {
      $match: { restaurant: restaurantId },
    },
    {
      $group: {
        _id: '$restaurant',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  // console.log(stats);

  if (stats.length > 0) {
    await Restaurant.findByIdAndUpdate(restaurantId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Restaurant.findByIdAndUpdate(restaurantId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

reviewSchema.post('save', function () {
  // this points to current review

  this.constructor.calcAverageRatings(this.restaurant);
});

// findByIdAndUpdate
// findByIdAndDelete
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  // console.log(this.r);
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  // await this.findOne(); does NOT work here, query has already executed
  await this.r.constructor.calcAverageRatings(this.r.restaurant);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
