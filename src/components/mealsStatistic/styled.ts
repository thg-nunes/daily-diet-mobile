import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    gap: 8px;
    height: 88px;

    align-items: center;
    justify-content: center;

    padding: 16px;
    border-radius: 8px;
    background: ${theme.colors.gray[300]};
  `}
`

export const MealsQuantity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size['3xl']}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const MealsQuantityDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.regular};
  `}
`
