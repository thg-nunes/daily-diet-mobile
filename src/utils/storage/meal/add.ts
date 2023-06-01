import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@errors/AppError'

import { Meal } from './types'
import { getAllMeals } from './getAllMeals'
import { MEAL_STORAGE_KEY } from '../storageConfig'
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
        allSavedMeals = addNewMealInSectionData(mealData, allSavedMeals)
      }

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
