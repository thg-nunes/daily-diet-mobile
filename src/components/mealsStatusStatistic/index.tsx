import * as Styled from './styled'

type MealsStatusStatisticProps = {
  mealsQuantity: number
  type?: Styled.MealsStatusType
  mealsQuantityDescription: string
}

export const MealsStatusStatistic = ({
  type = 'SUCCESS',
  mealsQuantity = 0,
  mealsQuantityDescription = ''
}: MealsStatusStatisticProps) => {
  return (
    <Styled.Container type={type}>
      <Styled.MealsQuantity>{mealsQuantity}</Styled.MealsQuantity>
      <Styled.MealsQuantityDescription>
        {mealsQuantityDescription}
      </Styled.MealsQuantityDescription>
    </Styled.Container>
  )
}
