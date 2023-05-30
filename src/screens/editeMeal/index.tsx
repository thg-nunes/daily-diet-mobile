import { useCallback, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'

import { Meal } from '@utils/storage/meal/types'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'

export const EditeMeal = () => {
  const { goBack } = useNavigation()

  const { params } = useRoute()
  const data = params as Meal

  const [mealName, setMealName] = useState('')
  const [mealDescription, setMealDescription] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')
  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [clockIsOpen, setClockIsOpen] = useState(false)

  const [mealOnDiet, setMealOnDiet] = useState<boolean | undefined>(undefined)
  const [mealOutDiet, setMealOutDiet] = useState<boolean | undefined>(undefined)

  function handleHomeScreen() {
    goBack()
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

        <Button text="Salvar alterações" />
      </Styled.Content>
    </Styled.Container>
  )
}
