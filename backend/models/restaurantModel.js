const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A restaurant must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A restaurant name must have less or equal then 40 characters',
      ],
      minlength: [
        10,
        'A restaurant name must have more or equal then 10 characters',
      ],
      // validate: [
      //   validator.isAlpha,
      //   'Restaurant name must only contain characters',
      // ],
    },

    slug: String,

    duration: {
      type: Number,
      required: [true, 'A restaurant must have a duration'],
    },

    address: {
      type: String,
      required: [true, 'A restaurant must have an address'],
    },

    maxCapacity: {
      type: Number,
      required: [true, 'A restaurant must have a max capacity'],
    },

    difficulty: {
      type: String,
      required: [true, 'A restaurant must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult',
      },
    },

    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },

    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: [true, 'A restaurant must have a price'],
    },

    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price',
      },
    },

    description: {
      type: String,
      trim: true,
    },

    summary: {
      type: String,
      trim: true,
      required: [true, 'A restaurant must have a summary'],
    },

    imageCover: {
      type: String,
      required: [true, 'A restaurant must have a cover image'],
    },

    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },

    startDates: [Date],
    secretRestaurant: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

restaurantSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
restaurantSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// restaurantSchema.pre('save', function (next) {
//   console.log('Will save document...');
//   next();
// });

// restaurantSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// restaurantSchema.pre('find', function (next) {
restaurantSchema.pre(/^find/, function (next) {
  this.find({ secretRestaurant: { $ne: true } });

  this.start = Date.now();
  next();
});

restaurantSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);

  next();
});

// AGGREGATION MIDDLEWARE
restaurantSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretRestaurant: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
