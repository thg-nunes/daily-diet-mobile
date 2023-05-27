import { Circle, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

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

  return (
    <Styled.Container mealOnDiet={mealOnDiet}>
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
          image={<Trash size={18} color={colors.gray[800]} />}
        />
      </Styled.Content>
    </Styled.Container>
  )
}
