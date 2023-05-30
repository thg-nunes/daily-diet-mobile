import { useTheme } from 'styled-components'
import { PressableProps } from 'react-native'
import { Circle } from 'phosphor-react-native'

import * as Styled from './styled'

type MealInfoProps = PressableProps & {
  hour: string
  mealName: string
  mealOnTheDiet: boolean
}

export const MealInfo = ({
  hour = '',
  mealName = '',
  mealOnTheDiet = true,
  ...rest
}: MealInfoProps) => {
  const { colors } = useTheme()

  function returnsCorrectlyText(text: string): string {
    if (text.length >= 20) {
      return `${text.slice(0, 21)}...`
    }

    return text
  }

  return (
    <Styled.Container mealOnTheDiet={mealOnTheDiet} {...rest}>
      <Styled.Hour>{hour}</Styled.Hour>
      <Styled.MealName>{returnsCorrectlyText(mealName)} </Styled.MealName>
      <Circle
        size={14}
        weight="fill"
        color={mealOnTheDiet ? colors.green[450] : colors.red[450]}
      />
    </Styled.Container>
  )
}
