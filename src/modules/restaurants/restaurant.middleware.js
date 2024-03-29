import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { RestaurantService } from "./restaurant.service.js";

export const validateExistRestaurant = catchAsync( async (req, res, next) => {

  const { id, restaurantId } = req.params;

  let resId = restaurantId || id;

  const restaurant = await RestaurantService.findOneRestaurant(resId);

  if (!restaurant) {
    return next(new AppError(`Restaurant whit id: ${resId} not found`, 404))
  }

  req.restaurant = restaurant;
  next();

});

export const validateExistReview = catchAsync( async (req, res, next) => {

  const { id } = req.params;

  const review = await RestaurantService.findOneReview(id);

  if (!review) {
    return next(new AppError(`Review whit id: ${id} not found`, 404))
  };

  req.review = review;
  req.user = review.user;
  next();

});