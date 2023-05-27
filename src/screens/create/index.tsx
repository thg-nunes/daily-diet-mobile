import { useState } from 'react'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'

type CreateProps = {}

export const Create = ({}: CreateProps) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')
  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  const [clockIsOpen, setClockIsOpen] = useState(false)

  const [mealOnDiet, setMealOnDiet] = useState<boolean | undefined>(undefined)
  const [mealOutDiet, setMealOutDiet] = useState<boolean | undefined>(undefined)

  return (
    <Styled.Container>
      <GoBackHeader headerText="Nova refeição" />
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
            maxLength: 50
          }}
        />
        <Input
          inputLabel="Descrição"
          isMultiline
          inputProps={{
            multiline: true,
            numberOfLines: 4,
            textAlignVertical: 'top',
            maxLength: 100
          }}
        />

        <Styled.MealDateAndHourInfo>
          <Styled.PressableContainer onPress={() => setCalendarIsOpen(true)}>
            <Input
              inputLabel="Data"
              inputProps={{
                value: selectedDate,
                editable: false,
                onChangeText: () => {
                  setSelectedDate('')
                  setCalendarIsOpen(true)
                },
                onFocus: () => setCalendarIsOpen(true)
              }}
            />
          </Styled.PressableContainer>
          <Styled.PressableContainer onPress={() => setClockIsOpen(true)}>
            <Input
              inputLabel="Hora"
              inputProps={{
                value: selectedHour,
                editable: false,
                onChangeText: () => {
                  setSelectedHour('')
                  setClockIsOpen(true)
                },
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

        <Button text="Cadastrar refeição" />
      </Styled.Content>
    </Styled.Container>
  )
}
