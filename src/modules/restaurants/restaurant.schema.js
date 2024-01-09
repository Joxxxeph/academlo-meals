
import z from 'zod';
import { extractValidationData } from '../../common/utils/extractErrorData.js';

const registerRestaurantSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(50, { message: 'Name is too long' }),

  address: z
    .string()
    .min(3, { message: 'Address is too short' })
    .max(70, { message: 'Address is too long' }),

  rating: z.number()

});
export function validateRestaurant(data) {
  const result = registerRestaurantSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: restaurantData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    restaurantData,
  };
}