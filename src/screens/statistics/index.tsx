import { Percent } from '@components/percent'
import { useRoute } from '@react-navigation/native'

import * as Styled from './styled'
import { MealsStatistic } from '@components/mealsStatistic'
import { MealsStatusStatistic } from '@components/mealsStatusStatistic'

type StatisticsProps = {}

type Params = {
  percentValue: number
}

export const Statistics = ({}: StatisticsProps) => {
  // const { params } = useRoute()
  // const { percentValue } = params as Params
  const percentValue = 30

  return (
    <Styled.Container percentValue={percentValue}>
      <Styled.PercentContainer>
        <Percent
          type="SECONDARY"
          percentValue={percentValue}
          percentDescription="das refeições dentro da dieta"
        />
      </Styled.PercentContainer>

      <Styled.Content>
        <Styled.ContentHeader>Estatísticas gerais</Styled.ContentHeader>
        <MealsStatistic
          mealsQuantity={22}
          mealsQuantityDescription="melhor sequência de pratos dentro da dieta"
        />
        <MealsStatistic
          mealsQuantity={109}
          mealsQuantityDescription="refeições registradas"
        />
        <Styled.MealsStatusContainer>
          <MealsStatusStatistic
            mealsQuantity={99}
            mealsQuantityDescription="refeições dentro da dieta"
          />
          <MealsStatusStatistic
            type="FAIL"
            mealsQuantity={10}
            mealsQuantityDescription="refeições fora da dieta"
          />
        </Styled.MealsStatusContainer>
      </Styled.Content>
    </Styled.Container>
  )
}
