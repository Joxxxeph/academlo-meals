import { User } from "../users/user.model.js";
import { Restaurant } from "./restaurant.model.js";
import { Review } from "./review.model.js";


export class RestaurantService {

  static async createRestaurant(data) {
    return await Restaurant.create(data);
  }

  static async findOneRestaurant(id) {
    return await Restaurant.findOne({
      where: {
        id,
        status: true
      }
    })
  }


  static async createReview(data) {
    return await Review.create(data);
  }

  static async findOneReview(id) {
    return await Review.findOne({
      where: {
        id,
        status: true
      },
      include: [
        {
          model: User
        }
      ]
    })
  }


}