import { useTheme } from 'styled-components'
import { useCallback, useMemo, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { SavedMeals } from '@utils/storage/meal/types'
import { getAllMeals } from '@utils/storage/meal/getAllMeals'

export type UseMealsOfDietPercentResponse = {
  onDietMeals: number
  offDietMeals: number
  _mealsOfDietPercent: number
  storageMealsQuantity: number
  listOfDishesWithinTheDiet: number[]
}

type HandleMealInfoParams = {
  item: {
    hour: string
    mealName: string
    description: string
    mealsOnDiet: boolean
  }
  date: string
}

const useHandleMealInfo = () => {
  const { navigate } = useNavigation()

  function handleMealInfo({ item, date }: HandleMealInfoParams): void {
    navigate('MealsDetails', {
      mealName: item.mealName,
      mealOnDiet: item.mealsOnDiet,
      mealDescription: item.description,
      dateAndHourDescription: {
        date,
        hour: item.hour
      }
    })
  }

  return { handleMealInfo }
}

const useRenderInitialData = () => {
  const [allMeals, setAllMeals] = useState<SavedMeals | []>([])
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  function handleNewMeal(): void {
    navigate('New')
  }

  useFocusEffect(
    useCallback(() => {
      async function getMealsFromStorage() {
        const response = await getAllMeals()
        setAllMeals(response)
      }

      getMealsFromStorage()
    }, [])
  )

  return {
    colors,
    allMeals,
    handleNewMeal
  }
}

const useMealsOfDietPercent = (
  allMeals: SavedMeals | []
): UseMealsOfDietPercentResponse => {
  return useMemo(() => {
    let onDietMeals = 0
    let offDietMeals = 0
    let storageMealsQuantity = 0
    let _mealsOfDietPercent = 0
    const listOfDishesWithinTheDiet: number[] = [0]

    if (allMeals.length) {
      allMeals.forEach((storagedMeal) => {
        storageMealsQuantity += storagedMeal.data.length
        let sequenceOfDishesWithinTheDiet = 0

        storagedMeal.data.forEach((meal, i) => {
          if (meal.mealsOnDiet) {
            onDietMeals += 1
          }
          if (meal.mealsOnDiet && i <= storagedMeal.data.length - 1) {
            sequenceOfDishesWithinTheDiet += 1
          } else if (!meal.mealsOnDiet && i < storagedMeal.data.length - 1) {
            sequenceOfDishesWithinTheDiet = 0
          }
        })
        listOfDishesWithinTheDiet.push(sequenceOfDishesWithinTheDiet)
      })

      offDietMeals = storageMealsQuantity - onDietMeals
      _mealsOfDietPercent = ((onDietMeals * 1) / storageMealsQuantity) * 100

      return {
        onDietMeals,
        offDietMeals,
        _mealsOfDietPercent,
        storageMealsQuantity,
        listOfDishesWithinTheDiet
      }
    }

    return {
      onDietMeals,
      offDietMeals,
      _mealsOfDietPercent,
      storageMealsQuantity,
      listOfDishesWithinTheDiet
    }
  }, [allMeals])
}

export { useRenderInitialData, useMealsOfDietPercent, useHandleMealInfo }
