import { Meal, SavedMeals } from './types'

export const addNewMealInSectionData = (
  mealData: Meal,
  savedMeals: SavedMeals
) => {
  return [
    ...savedMeals,
    {
      sectionDate: mealData.date,
      data: [
        {
          hour: mealData.hour,
          mealName: mealData.mealName,
          description: mealData.description,
          mealsOnDiet: mealData.mealIsOnDiet
        }
      ]
    }
  ]
}
