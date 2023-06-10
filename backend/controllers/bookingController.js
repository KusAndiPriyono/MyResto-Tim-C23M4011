const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Restaurant = require('../models/restaurantModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked restaurant
  const restaurant = await Restaurant.findById(req.params.restaurantId);
  // console.log(restaurant);

  // 2) Create checkout session
  const imageUrl = `${restaurant.imageCover}`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `http://localhost:3000/booking?alert=booking`,
    // success_url: `${req.protocol}://${req.get('host')}/?detail=${
    //   req.params.restaurantId
    // }&user=${req.user.id}&price=${restaurant.price}`,
    // success_url: `http://localhost:3000/?detail=${req.params.restaurantId}&user=${req.user.id}&price=${restaurant.price}`,
    // cancel_url: `${req.protocol}://${req.get('host')}/restaurant/${
    //   restaurant.slug
    // }`,
    cancel_url: `http://localhost:3000/detail/${restaurant.id}`,
    customer_email: req.user.email,
    client_reference_id: req.params.restaurantId,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: restaurant.price * 100,
          product_data: {
            name: `${restaurant.name} Restaurant`,
            description: restaurant.summary,
            // masih dalam pengembangan
            images: [imageUrl],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  const datUser = await User.findOne({ email: req.user.email });
  await Booking.create({
    restaurant: restaurant,
    user: datUser,
    price: restaurant.price,
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
  // await Restaurant.findById(req.params.restaurantId)
});

exports.myRestaurants = catchAsync(async (req, res, next) => {
  // const dataUser = await User.findById(req.user.id);
  res.status(200).json({
    status: 'success',
    data: {
      data: await Booking.find({ user: req.user.id }).populate('restaurant'),
    },
  });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
