import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@errors/AppError'

import { Meal } from './types'
import { getAllMeals } from './getAllMeals'
import { MEAL_STORAGE_KEY } from '../storageConfig'
import { addNewSectionInList } from './addNewSectionInList'
import { getMealByNameAndSectionDate } from './getMealByName'
import { addNewMealInSectionData } from './addNewMealInSectionData'

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
      allSavedMeals.forEach((savedMeal) => {
        if (savedMeal.sectionDate === mealData.date) {
          savedMeal.data = addNewMealInSectionData(savedMeal, mealData)
        } else {
          allSavedMeals = addNewSectionInList(allSavedMeals, mealData)
        }
      })

      const dataToStorage = JSON.stringify(allSavedMeals)

      return await AsyncStorage.setItem(MEAL_STORAGE_KEY, dataToStorage)
    }

    const firstMealRegister = [
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

    const dataToStorage = JSON.stringify(firstMealRegister)

    return await AsyncStorage.setItem(MEAL_STORAGE_KEY, dataToStorage)
  } catch (error) {
    throw error
  }
}

export { addMealOnList }
