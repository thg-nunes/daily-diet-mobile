import { useRoute } from '@react-navigation/native'

import { UseMealsOfDietPercentResponse } from '@hooks/screens/home'

import { Percent } from '@components/percent'
import { MealsStatistic } from '@components/mealsStatistic'
import { MealsStatusStatistic } from '@components/mealsStatusStatistic'

import * as Styled from './styled'

export const Statistics = () => {
  const { params } = useRoute()
  const { ...data } = params as UseMealsOfDietPercentResponse
  const sequenceOfDishesWithinTheDiet = Math.max(
    ...data.listOfDishesWithinTheDiet
  )

  return (
    <Styled.Container percentValue={data._mealsOfDietPercent}>
      <Styled.PercentContainer>
        <Percent
          type="SECONDARY"
          percentValue={data._mealsOfDietPercent}
          percentDescription="das refeições dentro da dieta"
        />
      </Styled.PercentContainer>

      <Styled.Content>
        <Styled.ContentHeader>Estatísticas gerais</Styled.ContentHeader>
        <MealsStatistic
          mealsQuantity={sequenceOfDishesWithinTheDiet}
          mealsQuantityDescription="melhor sequência de pratos dentro da dieta"
        />
        <MealsStatistic
          mealsQuantity={data.storageMealsQuantity}
          mealsQuantityDescription="refeições registradas"
        />
        <Styled.MealsStatusContainer>
          <MealsStatusStatistic
            mealsQuantity={data.onDietMeals}
            mealsQuantityDescription="refeições dentro da dieta"
          />
          <MealsStatusStatistic
            type="FAIL"
            mealsQuantity={data.offDietMeals}
            mealsQuantityDescription="refeições fora da dieta"
          />
        </Styled.MealsStatusContainer>
      </Styled.Content>
    </Styled.Container>
  )
}
