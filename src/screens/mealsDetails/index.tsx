import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Circle, PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Button } from '@components/button'
import { GoBackHeader } from '@components/goBackHeader'

import * as Styled from './styled'

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

  function handleMealEdite() {
    navigate('EditeMeal', {
      mealName,
      mealIsOnDiet: mealOnDiet,
      description: mealDescription,
      date: dateAndHourDescription.date,
      hour: dateAndHourDescription.hour
    })
  }

  return (
    <Styled.Container mealOnDiet={mealOnDiet}>
      <Styled.Modal visible={modalIsVisible} transparent>
        <Styled.ModalBackground>
          <Styled.ModalContent>
            <Styled.ModalText>
              Deseja realmente excluir o registro da refeição?
            </Styled.ModalText>

            <Styled.ModalButtons>
              <Button
                text="Cancelar"
                type="SECONDARY"
                onPress={handleCloseModal}
              />
              <Button text="Sim, excluir" />
            </Styled.ModalButtons>
          </Styled.ModalContent>
        </Styled.ModalBackground>
      </Styled.Modal>
      <GoBackHeader
        headerText="Refeição"
        touchableButton={{
          onPress: handleHomeScreen
        }}
      />
      <Styled.Content>
        <Styled.Meal>
          <Styled.MealName>{mealName}</Styled.MealName>
          <Styled.MealDescription>{mealDescription}</Styled.MealDescription>
        </Styled.Meal>

        <Styled.DateAndHourContainer>
          <Styled.DateAndHourHeader>Data e hora</Styled.DateAndHourHeader>
          <Styled.DateAndHourDescription>
            {dateAndHourDescription.date} às {dateAndHourDescription.hour}
          </Styled.DateAndHourDescription>
        </Styled.DateAndHourContainer>
        <Styled.MealInsideDietContainer>
          <Circle
            weight="fill"
            color={mealOnDiet ? colors.green[900] : colors.red[900]}
            size={8}
          />
          <Styled.MealInsideDietText>
            {mealOnDiet ? 'dentro da dieta' : 'fora da dieta'}
          </Styled.MealInsideDietText>
        </Styled.MealInsideDietContainer>

        <Button
          text="Editar refeição"
          image={
            <PencilSimpleLine
              size={18}
              color={colors.gray[100]}
              weight="thin"
            />
          }
          onPress={handleMealEdite}
        />
        <Button
          text="Excluir refeição"
          type="SECONDARY"
          onPress={handleOpenModal}
          image={<Trash size={18} color={colors.gray[800]} />}
        />
      </Styled.Content>
    </Styled.Container>
  )
}
