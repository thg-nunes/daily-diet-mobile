import AsyncStorage from '@react-native-async-storage/async-storage'

import { SavedMeals } from './types'
import { MEAL_STORAGE_KEY } from '../storageConfig'

const getAllMeals = async (): Promise<SavedMeals | []> => {
  try {
    const storagedMeals = await AsyncStorage.getItem(MEAL_STORAGE_KEY)

    const meals: SavedMeals = storagedMeals ? JSON.parse(storagedMeals) : []

    return meals
  } catch (error) {
    throw error
  }
}

export { getAllMeals }
