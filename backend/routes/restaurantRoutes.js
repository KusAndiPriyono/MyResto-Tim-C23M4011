const express = require('express');
const restaurantController = require('./../controllers/restaurantController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

router.use('/:restaurantId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(
    restaurantController.aliasTopRestaurants,
    restaurantController.getAllRestaurants
  );

router.route('/restaurant-stats').get(restaurantController.getRestaurantStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    restaurantController.getMonthlyPlan
  );

router
  .route('/restaurants-within/:distance/center/:latlng/unit/:unit')
  .get(restaurantController.getRestaurantsWithin);
// //  /restaurant-within/233/center/34.111745,-118.113491/unit/mi

router
  .route('/distances/:latlng/unit/:unit')
  .get(restaurantController.getDistances);

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    restaurantController.createRestaurant
  );

router
  .route('/:id')
  .get(restaurantController.getRestaurant)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    restaurantController.uploadRestaurantImages,
    restaurantController.resizeRestaurantImages,
    restaurantController.updateRestaurant
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    restaurantController.deleteRestaurant
  );

module.exports = router;
