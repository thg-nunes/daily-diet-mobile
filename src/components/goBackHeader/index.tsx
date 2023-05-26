import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import * as Styled from './styled'

type GoBackHeaderProps = {
  headerText: string
  touchableButton?: TouchableOpacityProps
}

export const GoBackHeader = ({
  headerText = '',
  touchableButton
}: GoBackHeaderProps) => {
  return (
    <Styled.Container>
      <TouchableOpacity {...touchableButton}>
        <Styled.ArrowLeftIcon />
      </TouchableOpacity>
      <Styled.HeaderText>{headerText}</Styled.HeaderText>
    </Styled.Container>
  )
}
