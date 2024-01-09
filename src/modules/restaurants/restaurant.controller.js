import { catchAsync } from "../../common/errors/catchAsync.js"
import { validateRestaurant } from "./restaurant.schema.js";
import { RestaurantService } from "./restaurant.service.js";


export const createRestaurant = catchAsync ( async (req, res, next) => {
  
  const { hasError, errorMessages, restaurantData } = validateRestaurant(req.body);

    if (hasError) {
      return res.status(422).json({
        status: 'error',
        message: errorMessages,
      });
    }

    const restaurant = await RestaurantService.createRestaurant(restaurantData);
    
    return res.status(201).json({
      restaurant : {
        id: restaurant.id,
        name: restaurant.name,
        email: restaurant.address,
        role: restaurant.rating,
      }
    });
});


export const createReview = catchAsync ( async (req, res, next) => {
  const {id} = req.params;
  const {comment, rating} = req.body;
  const {sessionUser} = req

  const review = await RestaurantService.createReview({
    userId: sessionUser.id,
    comment,
    rating,
    restaurantId: id
  });

  return res.status(201).json(review)

});


export const deleteReview = catchAsync ( async (req, res, next) => {

});

