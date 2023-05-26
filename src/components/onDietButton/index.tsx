import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as Styled from './styled'

type OnDietButtonProps = PressableProps & {
  text: string
  onDiet?: boolean
  buttonType?: 'PRIMARY' | 'SECONDARY'
}

export const OnDietButton = ({
  text = '',
  onDiet = undefined,
  buttonType = undefined,
  ...rest
}: OnDietButtonProps) => {
  const { colors } = useTheme()

  return (
    <Styled.Container buttonType={buttonType} onDiet={onDiet} {...rest}>
      <Styled.CircleIcon
        color={buttonType === 'PRIMARY' ? colors.green[900] : colors.red[900]}
      />
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.Container>
  )
}
