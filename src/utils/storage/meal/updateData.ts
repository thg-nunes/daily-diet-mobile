import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealToStorage } from './types'
import { MEAL_STORAGE_KEY } from '../storageConfig'
import { addMealOnList } from './add'

type UpdateMealDataParams = {
  mealName: string
  mealOnDiet: boolean
  selectedHour: string
  mealDescription: string
  mealNameByParam: string
  mealBySectionDate: MealToStorage
  mealsWithDistinctSectionDate: MealToStorage[]
}

type UpdateMealSectionDateParams = UpdateMealDataParams & {
  selectedDate: string
}

const updateMealData = async ({
  mealName,
  mealOnDiet,
  selectedHour,
  mealDescription,
  mealNameByParam,
  mealBySectionDate,
  mealsWithDistinctSectionDate
}: UpdateMealDataParams): Promise<void> => {
  mealBySectionDate.data = mealBySectionDate.data.map((meal) => {
    if (meal.mealName === mealNameByParam) {
      meal = {
        mealName,
        hour: selectedHour,
        mealsOnDiet: mealOnDiet,
        description: mealDescription
      }
      return meal
    }
    return meal
  })

  return await AsyncStorage.setItem(
    MEAL_STORAGE_KEY,
    JSON.stringify([...mealsWithDistinctSectionDate, mealBySectionDate])
  )
}

const updateMealSectionDate = async ({
  mealBySectionDate,
  mealNameByParam,
  mealsWithDistinctSectionDate,
  selectedHour,
  mealName,
  mealDescription,
  mealOnDiet,
  selectedDate
}: UpdateMealSectionDateParams): Promise<void> => {
  mealBySectionDate.data = mealBySectionDate.data.filter(
    (meal) => meal.mealName !== mealNameByParam
  )

  if (mealBySectionDate.data.length > 0) {
    await AsyncStorage.setItem(
      MEAL_STORAGE_KEY,
      JSON.stringify([...mealsWithDistinctSectionDate, mealBySectionDate])
    )

    await addMealOnList({
      date: selectedDate,
      mealName,
      hour: selectedHour,
      mealIsOnDiet: !!mealOnDiet,
      description: mealDescription
    })
  } else {
    await AsyncStorage.setItem(
      MEAL_STORAGE_KEY,
      JSON.stringify([...mealsWithDistinctSectionDate])
    )

    await addMealOnList({
      date: selectedDate,
      mealName,
      hour: selectedHour,
      mealIsOnDiet: !!mealOnDiet,
      description: mealDescription
    })
  }
}

export { updateMealData, updateMealSectionDate }
