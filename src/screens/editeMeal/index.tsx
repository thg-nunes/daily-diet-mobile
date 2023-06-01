import { Alert, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import { useCallback, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'

import { AppError } from '@errors/AppError'

import { Meal } from '@utils/storage/meal/types'
import { getAllMeals } from '@utils/storage/meal/getAllMeals'
import {
  updateMealData,
  updateMealSectionDate
} from '@utils/storage/meal/updateData'
import { getMealByNameAndSectionDate } from '@utils/storage/meal/getMealByName'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'

export const EditeMeal = () => {
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

  return (
    <Styled.Container>
      <GoBackHeader
        headerText="Editar refeição"
        touchableButton={{
          onPress: handleHomeScreen
        }}
      />
      {calendarIsOpen && (
        <Calendar
          setCalendarIsOpen={setCalendarIsOpen}
          setSelectedDate={setSelectedDate}
        />
      )}
      {clockIsOpen && (
        <Clock
          setClockIsOpen={setClockIsOpen}
          setSelectedHour={setSelectedHour}
        />
      )}

      <ScrollView
        style={{
          backgroundColor: colors.gray[100],
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
        showsVerticalScrollIndicator={false}
      >
        <Styled.Content>
          <Input
            inputLabel="Nome"
            inputProps={{
              maxLength: 50,
              onChangeText: setMealName,
              value: mealName ? mealName : data.mealName
            }}
          />
          <Input
            inputLabel="Descrição"
            isMultiline
            inputProps={{
              multiline: true,
              numberOfLines: 4,
              onChangeText: setMealDescription,
              value: mealDescription ? mealDescription : data.description,
              textAlignVertical: 'top',
              maxLength: 100
            }}
          />

          <Styled.MealDateAndHourInfo>
            <Styled.PressableContainer onPress={() => setCalendarIsOpen(true)}>
              <Input
                inputLabel="Data"
                inputProps={{
                  value: selectedDate ? selectedDate : data.date,
                  editable: false,
                  onChangeText: () => setCalendarIsOpen(true),
                  onFocus: () => setCalendarIsOpen(true)
                }}
              />
            </Styled.PressableContainer>
            <Styled.PressableContainer onPress={() => setClockIsOpen(true)}>
              <Input
                inputLabel="Hora"
                inputProps={{
                  value: selectedHour ? selectedHour : data.hour,
                  editable: false,
                  onChangeText: () => setClockIsOpen(true),
                  onFocus: () => setClockIsOpen(true)
                }}
              />
            </Styled.PressableContainer>
          </Styled.MealDateAndHourInfo>

          <Styled.MealChangeStateButton>
            <OnDietButton
              text="Sim"
              buttonType="PRIMARY"
              onDiet={mealOnDiet}
              onPress={() => {
                setMealOnDiet(true)
                setMealOutDiet(undefined)
              }}
            />
            <OnDietButton
              text="Não"
              buttonType="SECONDARY"
              onDiet={mealOutDiet}
              onPress={() => {
                setMealOutDiet(true)
                setMealOnDiet(undefined)
              }}
            />
          </Styled.MealChangeStateButton>

          <Button text="Salvar alterações" onPress={handleUpdateMealData} />
        </Styled.Content>
      </ScrollView>
    </Styled.Container>
  )
}
