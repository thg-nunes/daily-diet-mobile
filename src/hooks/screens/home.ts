import { useTheme } from 'styled-components'
import { useCallback, useMemo, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { SavedMeals } from '@utils/storage/meal/types'
import { getAllMeals } from '@utils/storage/meal/getAllMeals'

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

const useMealsOfDietPercent = (allMeals: SavedMeals | []) => {
  return useMemo(() => {
    let onDietMeals = 0
    let storageMealsQuantity = 0

    if (allMeals.length) {
      allMeals.forEach((storagedMeal) => {
        storageMealsQuantity += storagedMeal.data.length

        storagedMeal.data.forEach((meal) => {
          if (meal.mealsOnDiet) onDietMeals += 1
        })
      })

      const _mealsOfDietPercent = (onDietMeals * 1) / storageMealsQuantity

      return _mealsOfDietPercent * 100
    }

    return 0
  }, [allMeals])
}

export { useRenderInitialData, useMealsOfDietPercent }
