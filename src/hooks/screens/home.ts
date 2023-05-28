import { useTheme } from 'styled-components'
import { useCallback, useState } from 'react'
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

export { useRenderInitialData }
