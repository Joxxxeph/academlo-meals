import { catchAsync } from "../../common/errors/catchAsync.js"
import { validatePartialMeals } from "./meal.schema.js";
import { MealsService } from "./meal.service.js";



export const findAllMeals = catchAsync( async (req, res, next) => {
  const meals = await MealsService.findAllMeals();
  
  return res.status(200).json(meals);
});


export const createMeal = catchAsync( async (req, res, next) => {

});


export const findOneMeal = catchAsync( async (req, res, next) => {
  const { meal } = req;

  return res.status(200).json(meal)
});


export const updateMeal = catchAsync( async (req, res, next) => {
  const { meal } = req;
  const { hasError, errorMessages, mealData } = validatePartialMeals(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const mealUpdated = await MealsService.update(meal, mealData);

  return res.status(200).json(mealUpdated);
});


export const deleteMeal = catchAsync( async (req, res, next) => {
  const { meal } = req;

  await MealsService.deleteMeals(meal);

  return res.status(204).json(null);
});


