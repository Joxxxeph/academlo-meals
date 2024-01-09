import express from 'express';
import { createRestaurant, createReview, deleteReview } from './restaurant.controller.js';
import { protect, protectAccountOwner } from '../users/user.middleware.js';
import { validateExistRestaurant, validateExistReview } from './restaurant.middleware.js';

export const router = express.Router();

router.use(protect)

router.route('/')
  .post(createRestaurant)
  .get()

router.route('/:id')
  .get()
  .patch()
  .delete()

router.post('/review/:id',validateExistRestaurant, createReview)

router.route('/reviews/:restaurantId/:id')
  // .patch(updateReview)
  .delete(validateExistRestaurant, 
          validateExistReview, 
          protectAccountOwner, 
          deleteReview)