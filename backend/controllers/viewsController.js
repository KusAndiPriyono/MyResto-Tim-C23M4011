const Restaurant = require('../models/restaurantModel');
const user = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const restaurants = await Restaurant.find();

  // 2) Build template

  // 3) Render that template using tour data from 1)
  res.status(200).json({
    title: 'My Resto',
    restaurants,
  });
});

exports.getRestaurant = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested restaurant (including reviews and guides)
  const restaurant = await Restaurant.findOne({
    slug: req.params.slug,
  }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!restaurant) {
    return next(new AppError('There is no restaurant with that name.', 404));
  }

  // 2) Build template

  // 3) Render template using data from 1)

  res.status(200).json({
    title: {
      data: `${restaurant.name} Restaurant`,
    },
    restaurant,
  });
});

// exports.getLogin = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     title: 'Log into your account',
//   });
// });

exports.getMyRestaurants = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });
  const restaurantIDs = bookings.map((el) => el.restaurant);
  const restaurants = await Restaurant.find({ _id: { $in: restaurantIDs } });

  res.status(200).json({
    title: 'My Restaurants',
    restaurants,
  });
});
