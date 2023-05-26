import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    gap: 12px;
    height: 50px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;
    border-radius: 6px;
    background: ${theme.colors.gray[700]};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.bold};
  `}
`
