import { TouchableOpacityProps } from 'react-native'

import * as Styled from './styled'

type ButtonProps = TouchableOpacityProps & {
  text: string
  image?: JSX.Element
  type?: Styled.ButtonStyleProps
}

export const Button = ({
  text = '',
  type = 'PRIMARY',
  image,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Container type={type} activeOpacity={0.9} {...rest}>
      {image}
      <Styled.ButtonText type={type}>{text}</Styled.ButtonText>
    </Styled.Container>
  )
}
