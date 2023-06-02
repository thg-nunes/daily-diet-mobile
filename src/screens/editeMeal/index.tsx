import { ScrollView, View } from 'react-native'

import { useEditMeal } from '@hooks/screens/editeMeal'

import { Input } from '@components/input'
import { Clock } from '@components/clock'
import { Button } from '@components/button'
import { Calendar } from '@components/calendar'
import { GoBackHeader } from '@components/goBackHeader'
import { OnDietButton } from '@components/onDietButton'

import * as Styled from './styled'
import { useTheme } from 'styled-components'

export const EditeMeal = () => {
  const editeMeal = useEditMeal()
  const { colors } = useTheme()

  return (
    <Styled.Container>
      <GoBackHeader
        headerText="Editar refeição"
        touchableButton={{
          onPress: editeMeal.handleHomeScreen
        }}
      />
      {editeMeal.calendarIsOpen && (
        <Calendar
          setCalendarIsOpen={editeMeal.setCalendarIsOpen}
          setSelectedDate={editeMeal.setSelectedDate}
        />
      )}
      {editeMeal.clockIsOpen && (
        <Clock
          setClockIsOpen={editeMeal.setClockIsOpen}
          setSelectedHour={editeMeal.setSelectedHour}
        />
      )}

      <ScrollView style={{ backgroundColor: colors.gray[100] }}>
        <Styled.Content>
          <View
            style={{
              gap: 24,
              flex: 1
            }}
          >
            <Input
              inputLabel="Nome"
              inputProps={{
                maxLength: 50,
                onChangeText: editeMeal.setMealName,
                value: editeMeal.mealName
                  ? editeMeal.mealName
                  : editeMeal.data.mealName
              }}
            />
            <Input
              inputLabel="Descrição"
              isMultiline
              inputProps={{
                multiline: true,
                numberOfLines: 4,
                onChangeText: editeMeal.setMealDescription,
                value: editeMeal.mealDescription
                  ? editeMeal.mealDescription
                  : editeMeal.data.description,
                textAlignVertical: 'top',
                maxLength: 100
              }}
            />

            <Styled.MealDateAndHourInfo>
              <Styled.PressableContainer
                onPress={() => editeMeal.setCalendarIsOpen(true)}
              >
                <Input
                  inputLabel="Data"
                  inputProps={{
                    value: editeMeal.selectedDate
                      ? editeMeal.selectedDate
                      : editeMeal.data.date,
                    editable: false,
                    onChangeText: () => editeMeal.setCalendarIsOpen(true),
                    onFocus: () => editeMeal.setCalendarIsOpen(true)
                  }}
                />
              </Styled.PressableContainer>
              <Styled.PressableContainer
                onPress={() => editeMeal.setClockIsOpen(true)}
              >
                <Input
                  inputLabel="Hora"
                  inputProps={{
                    value: editeMeal.selectedHour
                      ? editeMeal.selectedHour
                      : editeMeal.data.hour,
                    editable: false,
                    onChangeText: () => editeMeal.setClockIsOpen(true),
                    onFocus: () => editeMeal.setClockIsOpen(true)
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
                  onDiet={editeMeal.mealOnDiet}
                  onPress={() => {
                    editeMeal.setMealOnDiet(true)
                    editeMeal.setMealOutDiet(undefined)
                  }}
                />
                <OnDietButton
                  text="Não"
                  buttonType="SECONDARY"
                  onDiet={editeMeal.mealOutDiet}
                  onPress={() => {
                    editeMeal.setMealOutDiet(true)
                    editeMeal.setMealOnDiet(undefined)
                  }}
                />
              </Styled.MealChangeStateButton>
            </Styled.OnDietButtonsSection>
          </View>

          <Button
            text="Salvar alterações"
            onPress={editeMeal.handleUpdateMealData}
          />
        </Styled.Content>
      </ScrollView>
    </Styled.Container>
  )
}
