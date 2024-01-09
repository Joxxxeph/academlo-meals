import { AppError } from "../../common/errors/appError.js";
import { MealsService } from "./meal.service.js";


export const validateExistMeal = catchAsync( async (req, res, next) => {

  const { id } = req.params;

  const meal = await MealsService.findOneMeals(id);

  if (!meal) {
    return next(new AppError(`User whit id: ${id} not found`, 404))
  }

  req.meal = meal;
  next();

});