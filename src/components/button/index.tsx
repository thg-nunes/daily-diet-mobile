import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

import * as Styled from './styled'

type ButtonProps = TouchableOpacityProps & {
  text: string
  type?: 'ADD' | 'CREATE'
}

export const Button = ({
  text = '',
  type = 'CREATE',
  ...rest
}: ButtonProps) => {
  const { colors } = useTheme()

  return (
    <Styled.Container {...rest}>
      {type === 'ADD' && <Plus size={18} color={colors.gray[100]} />}
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.Container>
  )
}
