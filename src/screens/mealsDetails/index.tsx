import { Circle, PencilSimpleLine, Trash } from 'phosphor-react-native'

import { useMealsDetails } from '@hooks/screens/mealsDetails'

import { Button } from '@components/button'
import { GoBackHeader } from '@components/goBackHeader'

import * as Styled from './styled'
import { ScrollView, View } from 'react-native'

export type MealsDetailsProps = {
  mealOnDiet: boolean
  mealName: string
  mealDescription: string
  dateAndHourDescription: {
    date: string
    hour: string
  }
}

export const MealsDetails = () => {
  const mealsDetails = useMealsDetails()

  return (
    <Styled.Container mealOnDiet={mealsDetails.mealOnDiet}>
      <Styled.Modal visible={mealsDetails.modalIsVisible} transparent>
        <Styled.ModalBackground>
          <Styled.ModalContent>
            <Styled.ModalText>
              Deseja realmente excluir o registro da refeição?
            </Styled.ModalText>

            <Styled.ModalButtons>
              <Button
                text="Cancelar"
                type="SECONDARY"
                style={{ flex: 1 }}
                onPress={mealsDetails.handleCloseModal}
              />
              <Button
                text="Sim, excluir"
                style={{ flex: 1 }}
                onPress={mealsDetails.handleMealDelete}
              />
            </Styled.ModalButtons>
          </Styled.ModalContent>
        </Styled.ModalBackground>
      </Styled.Modal>
      <GoBackHeader
        headerText="Refeição"
        touchableButton={{
          onPress: mealsDetails.handleHomeScreen
        }}
      />
      <Styled.Content>
        <View style={{ flex: 1, gap: 24 }}>
          <Styled.Meal>
            <Styled.MealName>{mealsDetails.mealName}</Styled.MealName>
            <Styled.MealDescription>
              {mealsDetails.mealDescription}
            </Styled.MealDescription>
          </Styled.Meal>

          <Styled.DateAndHourContainer>
            <Styled.DateAndHourHeader>Data e hora</Styled.DateAndHourHeader>
            <Styled.DateAndHourDescription>
              {mealsDetails.dateAndHourDescription.date} às{' '}
              {mealsDetails.dateAndHourDescription.hour}
            </Styled.DateAndHourDescription>
          </Styled.DateAndHourContainer>
          <Styled.MealInsideDietContainer>
            <Circle
              weight="fill"
              color={
                mealsDetails.mealOnDiet
                  ? mealsDetails.colors.green[900]
                  : mealsDetails.colors.red[900]
              }
              size={8}
            />
            <Styled.MealInsideDietText>
              {mealsDetails.mealOnDiet ? 'dentro da dieta' : 'fora da dieta'}
            </Styled.MealInsideDietText>
          </Styled.MealInsideDietContainer>
        </View>

        <Button
          style={{
            marginBottom: 10
          }}
          text="Editar refeição"
          image={
            <PencilSimpleLine
              size={18}
              color={mealsDetails.colors.gray[100]}
              weight="thin"
            />
          }
          onPress={mealsDetails.handleMealEdite}
        />
        <Button
          text="Excluir refeição"
          type="SECONDARY"
          onPress={mealsDetails.handleOpenModal}
          image={<Trash size={18} color={mealsDetails.colors.gray[800]} />}
        />
      </Styled.Content>
    </Styled.Container>
  )
}
