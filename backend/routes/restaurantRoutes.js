const express = require('express');
const restaurantController = require('./../controllers/restaurantController');
const authController = require('./../controllers/authController');
// const reviewController = require('./../controllers/reviewController');
const reviewRouter = require('./../routes/reviewRoutes');
const router = express.Router();

// router.param('id', restaurantController.checkID);

// POST /restaurant/234fad4/reviews
// GET /restaurant/234fad4/reviews

router.use('/:restaurantId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(
    restaurantController.aliasTopRestaurants,
    restaurantController.getAllRestaurants
  );

router.route('/restaurant-stats').get(restaurantController.getRestaurantStats);
router.route('/monthly-plan/:year').get(restaurantController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    restaurantController.deleteRestaurant
  );

module.exports = router;
