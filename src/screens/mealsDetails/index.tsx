import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { Circle, PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Button } from '@components/button'
import { GoBackHeader } from '@components/goBackHeader'

import * as Styled from './styled'

type MealsDetailsProps = {
  mealOnDiet: boolean
  mealName: string
  mealDescription: string
  dateAndHourDescription: {
    date: string
    hour: string
  }
}

export const MealsDetails = ({
  mealOnDiet,
  mealName = '',
  mealDescription = '',
  dateAndHourDescription
}: MealsDetailsProps) => {
  const { colors } = useTheme()
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function handleOpenModal() {
    setModalIsVisible(true)
  }

  function handleCloseModal() {
    setModalIsVisible(false)
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
      <GoBackHeader headerText="Refeição" />
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
