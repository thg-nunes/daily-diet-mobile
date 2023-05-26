import styled, { css } from 'styled-components/native'

export type MealsStatusType = 'SUCCESS' | 'FAIL'

type ContainerProps = {
  type?: MealsStatusType
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, type }) => css`
    gap: 8px;
    width: 157.5px;
    height: 107px;

    align-items: center;
    justify-content: center;

    padding: 16px;
    border-radius: 8px;
    background: ${type === 'SUCCESS'
      ? theme.colors.green[50]
      : theme.colors.red[50]};
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
