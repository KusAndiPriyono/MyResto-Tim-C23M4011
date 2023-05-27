const express = require('express');
const restaurantController = require('./../controllers/restaurantController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.param('id', restaurantController.checkID);

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
