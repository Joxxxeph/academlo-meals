import express from 'express';
import { createMeal, deleteMeal, findAllMeals, findOneMeal, updateMeal } from './meal.controller.js';
import { protect, restrictTo } from '../users/user.middleware.js';
import { validateExistMeal } from './meal.middleware.js';
import { validateExistRestaurant } from '../restaurants/restaurant.middleware.js';

export const router = express.Router();

router.get('/', findAllMeals)
router.get('/:id', validateExistMeal, findOneMeal)

router.use(protect)

router.route('/:id')
  .post(restrictTo('normal'), validateExistRestaurant, createMeal)
  .patch(restrictTo('normal'), validateExistMeal, updateMeal)
  .delete(restrictTo('normal'), validateExistMeal, deleteMeal)