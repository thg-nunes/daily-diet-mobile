import { Meal, MealToStorage } from './types'

export const addNewMealInSectionData = (
  savedMeal: MealToStorage,
  mealData: Meal
) => {
  return [
    ...savedMeal.data,
    {
      hour: mealData.hour,
      mealName: mealData.mealName,
      description: mealData.description,
      mealsOnDiet: mealData.mealIsOnDiet
    }
  ]
}
