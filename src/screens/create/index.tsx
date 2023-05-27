import { useState } from 'react'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'

export const Create = () => {
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
      <Styled.Scroll showsVerticalScrollIndicator={false}>
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
              maxLength: 100,
              style: {
                height: 120,
                maxHeight: 120
              }
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

          <Styled.OnDietButtonsSection>
            <Styled.OnDietButtonsSectionHeader>
              Está dentro da dieta?
            </Styled.OnDietButtonsSectionHeader>
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
          </Styled.OnDietButtonsSection>

          <Styled.ButtonContainer>
            <Button text="Cadastrar refeição" />
          </Styled.ButtonContainer>
        </Styled.Content>
      </Styled.Scroll>
    </Styled.Container>
  )
}
