import { AppError } from '@errors/AppError'

import { Meal } from '@utils/storage/meal/types'
import { getAllMeals } from '@utils/storage/meal/getAllMeals'
import {
  updateMealData,
  updateMealSectionDate
} from '@utils/storage/meal/updateData'
import { getMealByNameAndSectionDate } from '@utils/storage/meal/getMealByName'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

const useEditMeal = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const data = params as Meal

  const { colors } = useTheme()

  const [mealName, setMealName] = useState(data.mealName)
  const [mealDescription, setMealDescription] = useState(data.description)
  const [selectedDate, setSelectedDate] = useState(data.date)
  const [selectedHour, setSelectedHour] = useState(data.hour)
  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [clockIsOpen, setClockIsOpen] = useState(false)

  const [mealOnDiet, setMealOnDiet] = useState<boolean | undefined>(
    data.mealIsOnDiet ? true : undefined
  )
  const [mealOutDiet, setMealOutDiet] = useState<boolean | undefined>(
    !data.mealIsOnDiet ? false : undefined
  )

  function handleHomeScreen() {
    navigate('Home')
  }

  async function handleUpdateMealData(): Promise<void> {
    try {
      const mealsStorage = await getAllMeals()
      const mealsWithDistinctSectionDate = mealsStorage.filter(
        (meal) => meal.sectionDate !== data.date
      )
      const mealBySectionDate = await getMealByNameAndSectionDate({
        mealName: data.mealName,
        sectionDate: data.date
      })

      if (mealBySectionDate) {
        if (selectedDate === mealBySectionDate.sectionDate) {
          await updateMealData({
            mealName,
            mealNameByParam: data.mealName,
            selectedHour,
            mealOnDiet: !!mealOnDiet,
            mealDescription,
            mealsWithDistinctSectionDate,
            mealBySectionDate
          })
        } else {
          await updateMealSectionDate({
            mealName,
            mealNameByParam: data.mealName,
            selectedHour,
            mealOnDiet: !!mealOnDiet,
            mealDescription,
            mealsWithDistinctSectionDate,
            mealBySectionDate,
            selectedDate
          })
        }
      }

      return Alert.alert(
        'Deu certo!',
        'Os dados da refeição foram atualizados!'
      )
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Atenção', error.message)
      }

      return Alert.alert(
        'Atenção',
        'Houve um erro ao tentar editar essa refeição.'
      )
    }
  }

  useFocusEffect(
    useCallback(() => {
      data.mealIsOnDiet
        ? setMealOnDiet(data.mealIsOnDiet)
        : setMealOutDiet(true)
    }, [data])
  )

  return {
    data,
    clockIsOpen,
    calendarIsOpen,
    setClockIsOpen,
    setCalendarIsOpen,
    setSelectedDate,
    setSelectedHour,
    colors,
    setMealName,
    mealName,
    mealDescription,
    setMealDescription,
    selectedDate,
    selectedHour,
    mealOnDiet,
    setMealOnDiet,
    mealOutDiet,
    setMealOutDiet,
    handleUpdateMealData,
    handleHomeScreen
  }
}

export { useEditMeal }
