const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Restaurant = require('../models/restaurantModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked restaurant
  const restaurant = await Restaurant.findById(req.params.restaurantId);

  // 2) Create checkout session

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/?restaurants=${
      req.params.restaurantId
    }&user=${req.user.id}&price=${restaurant.price}`,
    cancel_url: `${req.protocol}://${req.get('host')}/restaurant/${
      restaurant.slug
    }`,
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
            images: [`http://127.0.0.1:8000/${restaurant.imageCover}`],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  // This is only TEMPORARY, because it's UNSECURE: everyone can make bookings without paying
  const { restaurant, user, price } = req.query;

  if (!restaurant && !user && !price) return next();
  await Booking.create({ restaurant, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
