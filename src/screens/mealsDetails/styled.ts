import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  mealOnDiet: boolean
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  ${({ theme, mealOnDiet }) => css`
    flex: 1;

    background: ${mealOnDiet ? theme.colors.green[50] : theme.colors.red[50]};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 24px;

    padding: 40px 24px;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: ${theme.colors.gray[100]};
  `}
`

export const Meal = styled.View`
  ${({ theme }) => css`
    gap: 8px;
  `}
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-family: ${theme.font_familly.bold};
    font-size: ${theme.font_size.xl}px;
  `}
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-family: ${theme.font_familly.regular};
    font-size: ${theme.font_size.lg}px;
  `}
`

export const DateAndHourContainer = styled.View`
  ${({ theme }) => css`
    gap: 8px;
  `}
`

export const DateAndHourHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-family: ${theme.font_familly.bold};
    font-size: ${theme.font_size.md}px;
  `}
`

export const DateAndHourDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-family: ${theme.font_familly.regular};
    font-size: ${theme.font_size.lg}px;
  `}
`

export const MealInsideDietContainer = styled.View`
  ${({ theme }) => css`
    width: 144px;

    gap: 8px;
    align-items: center;
    flex-direction: row;

    padding: 8px 16px;
    border-radius: 999px;
    background: ${theme.colors.gray[300]};
  `}
`

export const MealInsideDietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-family: ${theme.font_familly.regular};
    font-size: ${theme.font_size.md}px;
  `}
`
