import AsyncStorage from '@react-native-async-storage/async-storage'

import { SavedMeals } from './types'
import { MEAL_STORAGE_KEY } from '../storageConfig'

type GetMalByName = {
  mealName: string
  sectionDate: string
}

const getMealByNameAndSectionDate = async ({
  mealName = '',
  sectionDate = ''
}: GetMalByName) => {
  try {
    const storeddData = await AsyncStorage.getItem(MEAL_STORAGE_KEY)

    if (storeddData) {
      const data = JSON.parse(storeddData) as SavedMeals

      const existingMeal = data.find((meal) => {
        if (meal.sectionDate === sectionDate) {
          return meal.data.find((_meal) => _meal.mealName === mealName)
        }
      })

      return existingMeal
    }

    return undefined
  } catch (error) {
    throw error
  }
}

export { getMealByNameAndSectionDate }
