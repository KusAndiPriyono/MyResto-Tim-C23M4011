// const Restaurant = require('../models/restaurantModel');
// const catchAsync = require('../utils/catchAsync');

// exports.getOverview = catchAsync(async (req, res, next) => {
//   // 1) Get tour data from collection
//   const restaurants = await Restaurant.find();

//   // 2) Build template

//   // 3) Render that template using tour data from 1)
//   res.status(200).json({
//     title: 'My Resto',
//     restaurants,
//   });
// });

// exports.getRestaurant = catchAsync(async (req, res, next) => {
//   // 1) Get the data, for the requested restaurant (including reviews and guides)
//   const restaurant = await Restaurant.findOne({
//     slug: req.params.slug,
//   }).populate({
//     path: 'reviews',
//     fields: 'review rating user',
//   });

//   // 2) Build template

//   // 3) Render template using data from 1)

//   res.status(200).json({
//     title: {
//       data: `${restaurant.name} Restaurant`,
//     },
//   });
// });

// exports.getLogin = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     title: 'Log into your account',
//   });
// });
