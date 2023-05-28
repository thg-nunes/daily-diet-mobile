import { useCreateAnNewMeal } from '@hooks/screens/create'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'

export const Create = () => {
  const { ...createMeal } = useCreateAnNewMeal()

  function handleGoBack(): void {
    createMeal.goBack()
  }

  return (
    <Styled.Container>
      <GoBackHeader
        headerText="Nova refeição"
        touchableButton={{ onPress: handleGoBack }}
      />
      {createMeal.calendarIsOpen && (
        <Calendar
          setCalendarIsOpen={createMeal.setCalendarIsOpen}
          setSelectedDate={createMeal.setSelectedDate}
        />
      )}
      {createMeal.clockIsOpen && (
        <Clock
          setClockIsOpen={createMeal.setClockIsOpen}
          setSelectedHour={createMeal.setSelectedHour}
        />
      )}
      <Styled.Scroll showsVerticalScrollIndicator={false}>
        <Styled.Content>
          <Input
            inputLabel="Nome"
            inputProps={{
              value: createMeal.mealName,
              maxLength: 50,
              onChangeText: createMeal.setMealName
            }}
          />
          <Input
            inputLabel="Descrição"
            isMultiline
            inputProps={{
              value: createMeal.mealDescription,
              multiline: true,
              numberOfLines: 4,
              textAlignVertical: 'top',
              maxLength: 100,
              onChangeText: createMeal.setMealDescription,
              style: {
                height: 120,
                maxHeight: 120
              }
            }}
          />

          <Styled.MealDateAndHourInfo>
            <Styled.PressableContainer
              onPress={() => createMeal.setCalendarIsOpen(true)}
            >
              <Input
                inputLabel="Data"
                inputProps={{
                  value: createMeal.selectedDate,
                  editable: false,
                  onChangeText: () => {
                    createMeal.setSelectedDate('')
                    createMeal.setCalendarIsOpen(true)
                  },
                  onFocus: () => createMeal.setCalendarIsOpen(true)
                }}
              />
            </Styled.PressableContainer>
            <Styled.PressableContainer
              onPress={() => createMeal.setClockIsOpen(true)}
            >
              <Input
                inputLabel="Hora"
                inputProps={{
                  value: createMeal.selectedHour,
                  editable: false,
                  onChangeText: () => {
                    createMeal.setSelectedHour('')
                    createMeal.setClockIsOpen(true)
                  },
                  onFocus: () => createMeal.setClockIsOpen(true)
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
                onDiet={createMeal.mealOnDiet}
                onPress={() => {
                  createMeal.setMealOnDiet(true)
                  createMeal.setMealOutDiet(undefined)
                }}
              />
              <OnDietButton
                text="Não"
                buttonType="SECONDARY"
                onDiet={createMeal.mealOutDiet}
                onPress={() => {
                  createMeal.setMealOutDiet(true)
                  createMeal.setMealOnDiet(undefined)
                }}
              />
            </Styled.MealChangeStateButton>
          </Styled.OnDietButtonsSection>

          <Styled.ButtonContainer>
            <Button
              text="Cadastrar refeição"
              onPress={createMeal.handleNewMeal}
            />
          </Styled.ButtonContainer>
        </Styled.Content>
      </Styled.Scroll>
    </Styled.Container>
  )
}
