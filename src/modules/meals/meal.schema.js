import z from 'zod';
import { extractValidationData } from '../../common/utils/extractErrorData.js';

const registerMealsSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(50, { message: 'Name is too long' }),

  price: z.number(),

  restaurantId: z.number(),

});
 

export function validateMeals(data) {
  const result = registerMealsSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: mealData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    mealData,
  };
}

export function validatePartialMeals(data) {
  const result = registerMealsSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: mealData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    mealData,
  };
}




