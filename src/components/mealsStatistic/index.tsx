import * as Styled from './styled'

type MealsStatisticProps = {
  mealsQuantity: number
  mealsQuantityDescription: string
}

export const MealsStatistic = ({
  mealsQuantity = 0,
  mealsQuantityDescription = ''
}: MealsStatisticProps) => {
  return (
    <Styled.Container>
      <Styled.MealsQuantity>{mealsQuantity}</Styled.MealsQuantity>
      <Styled.MealsQuantityDescription>
        {mealsQuantityDescription}
      </Styled.MealsQuantityDescription>
    </Styled.Container>
  )
}
