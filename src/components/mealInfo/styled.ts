import styled, { css } from 'styled-components/native'

type MealOnTheDiet = {
  mealOnTheDiet: boolean
}

export const Container = styled.View<MealOnTheDiet>`
  ${({ theme }) => css`
    gap: 12px;
    height: 49px;

    flex-direction: row;
    align-items: center;

    border-width: 1px;
    border-radius: 6px;
    border-color: ${theme.colors.gray[400]};
    background: ${theme.colors.gray[100]};

    padding: 14px 16px 14px 12px;
  `}
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    flex: 1;

    padding: 0 12px;

    color: ${theme.colors.gray[700]};
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_familly.regular};

    border-left-width: 1px;
    border-color: ${theme.colors.gray[500]};
  `}
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_familly.bold};
  `}
`
