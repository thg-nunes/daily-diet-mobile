import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AppError } from '@errors/AppError'
import { addMealOnList } from '@utils/storage/meal/add'

const useCreateAnNewMeal = () => {
  const { goBack } = useNavigation()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')

  const [mealName, setMealName] = useState('')
  const [mealDescription, setMealDescription] = useState('')

  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [clockIsOpen, setClockIsOpen] = useState(false)

  const [mealOnDiet, setMealOnDiet] = useState<boolean | undefined>(undefined)
  const [mealOutDiet, setMealOutDiet] = useState<boolean | undefined>(undefined)

  async function handleNewMeal(): Promise<void> {
    if (!mealName || !mealDescription || !selectedDate || !selectedHour) {
      return Alert.alert(
        'Atenção !',
        'Para adicionar uma refeição, preencha todos campos.'
      )
    }

    if (
      typeof mealOnDiet === 'undefined' &&
      typeof mealOutDiet === 'undefined'
    ) {
      return Alert.alert(
        'Tipo de refeição faltando',
        'Precisamos saber se a refeição está dentro ou fora da dieta.'
      )
    }

    try {
      await addMealOnList({
        date: selectedDate,
        description: mealDescription,
        hour: selectedHour,
        mealIsOnDiet: !!mealOnDiet,
        mealName
      })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Error ao cadastrar refeição', error.message)
      }
    }

    setSelectedDate('')
    setMealName('')
    setMealDescription('')
    setSelectedHour('')
    setMealOnDiet(undefined)
    setMealOutDiet(undefined)
  }

  return {
    goBack,
    calendarIsOpen,
    setCalendarIsOpen,
    clockIsOpen,
    selectedDate,
    setSelectedDate,
    selectedHour,
    setSelectedHour,
    setClockIsOpen,
    handleNewMeal,
    mealName,
    mealOnDiet,
    setMealOnDiet,
    mealOutDiet,
    setMealOutDiet,
    setMealName,
    mealDescription,
    setMealDescription
  }
}

export { useCreateAnNewMeal }
