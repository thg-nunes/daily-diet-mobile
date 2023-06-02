import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealsDetailsProps } from '@screens/mealsDetails'

import { getAllMeals } from '@utils/storage/meal/getAllMeals'
import { MEAL_STORAGE_KEY } from '@utils/storage/storageConfig'
import { saveDataInStorage } from '@utils/storage/saveDataInStorage'

const useMealsDetails = () => {
  const { colors } = useTheme()
  const { params } = useRoute()
  const { navigate } = useNavigation()
  const { dateAndHourDescription, mealDescription, mealName, mealOnDiet } =
    params as MealsDetailsProps
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function handleOpenModal() {
    setModalIsVisible(true)
  }

  function handleCloseModal() {
    setModalIsVisible(false)
  }

  function handleHomeScreen() {
    navigate('Home')
  }

  async function handleMealDelete(): Promise<void> {
    const allMeals = await getAllMeals()

    const dataWithRemovedMeal = allMeals.map((meal) => {
      if (meal.sectionDate === dateAndHourDescription.date) {
        meal.data = meal.data.filter(
          (savedMeal) => savedMeal.mealName !== mealName
        )

        return meal
      }
      return meal
    })

    const mealsWithExistingData = dataWithRemovedMeal.filter(
      (savedMeals) => savedMeals.data.length > 0
    )

    await saveDataInStorage({
      key: MEAL_STORAGE_KEY,
      dataToSave: mealsWithExistingData
    })

    navigate('Home')
  }

  function handleMealEdite() {
    navigate('EditeMeal', {
      mealName,
      mealIsOnDiet: mealOnDiet,
      description: mealDescription,
      date: dateAndHourDescription.date,
      hour: dateAndHourDescription.hour
    })
  }

  return {
    mealOnDiet,
    modalIsVisible,
    handleCloseModal,
    handleMealDelete,
    handleHomeScreen,
    mealName,
    mealDescription,
    dateAndHourDescription,
    colors,
    handleMealEdite,
    handleOpenModal
  }
}

export { useMealsDetails }
