import { TextInputProps } from 'react-native'
import * as Styled from './styled'

type InputProps = {
  inputLabel: string
  isMultiline?: boolean
  inputProps?: TextInputProps
}

export const Input = ({
  inputLabel = '',
  isMultiline = false,
  inputProps
}: InputProps) => {
  return (
    <Styled.Container>
      <Styled.InputLabel>{inputLabel}</Styled.InputLabel>
      <Styled.Input isMultiline={isMultiline} {...inputProps} />
    </Styled.Container>
  )
}
