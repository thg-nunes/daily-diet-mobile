import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;

    padding: 0 24px;
    margin: 28px 0 24px;
  `}
`

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[700]
}))``
