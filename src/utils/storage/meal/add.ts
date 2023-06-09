import { AppError } from '@errors/AppError'

import { Meal } from './types'
import { getAllMeals } from './getAllMeals'
import { MEAL_STORAGE_KEY } from '../storageConfig'
import { saveDataInStorage } from '../saveDataInStorage'
import { getMealByNameAndSectionDate } from './getMealByName'
import { addNewSectionInStorage } from './addNewSectionInStorage'

const addMealOnList = async (mealData: Meal) => {
  try {
    const mealAlreadyExists = await getMealByNameAndSectionDate({
      sectionDate: mealData.date,
      mealName: mealData.mealName
    })

    if (mealAlreadyExists) {
      throw new AppError('Uma refeição com o mesmo nome já foi registrada.')
    }

    let allSavedMeals = await getAllMeals()

    if (allSavedMeals.length > 0) {
      const setctionDateAlreadyExists = allSavedMeals.find(
        (savedMeal) => savedMeal.sectionDate === mealData.date
      )

      const otherMeals = allSavedMeals.filter(
        (savedMeal) => savedMeal.sectionDate !== mealData.date
      )

      if (setctionDateAlreadyExists) {
        setctionDateAlreadyExists.data.push({
          hour: mealData.hour,
          mealName: mealData.mealName,
          description: mealData.description,
          mealsOnDiet: mealData.mealIsOnDiet
        })
        allSavedMeals = [...otherMeals, setctionDateAlreadyExists]
      } else {
        allSavedMeals = addNewSectionInStorage(mealData, allSavedMeals)
      }

      return await saveDataInStorage({
        key: MEAL_STORAGE_KEY,
        dataToSave: allSavedMeals
      })
    }

    const firstMealRegister = addNewSectionInStorage(mealData, [])

    return await saveDataInStorage({
      key: MEAL_STORAGE_KEY,
      dataToSave: firstMealRegister
    })
  } catch (error) {
    throw error
  }
}

export { addMealOnList }
