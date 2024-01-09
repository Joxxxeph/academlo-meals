import { Meal } from "./meal.model.js";


export class MealsService {
  
  static async findAllMeals(){
    return await Meal.findAll({
      where: {
        status: true
      }
    })
  }

  static async findOneMeals(id){
    return await Meal.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  static async updateMeals(meal, data){
    return await meal.update({data})
  }

  static async deleteMeals(meal){
    return await meal.update({ status: false })
  }

  static async crateMeal(data) {
    return await Meal.create(data)
  }


}