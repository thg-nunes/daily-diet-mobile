import { Meal, SavedMeals } from './types'

export const addNewSectionInList = (mealsList: SavedMeals, mealData: Meal) => {
  return [
    ...mealsList,
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
