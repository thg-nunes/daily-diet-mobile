import { Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;

    background: ${theme.colors.gray[400]};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 40px 24px;
    background: ${theme.colors.gray[100]};
  `}
`

export const PressableContainer = styled(Pressable)`
  ${({ theme }) => css`
    flex: 1;
  `}
`

export const OnDietButtonsSection = styled.View`
  gap: 8px;
  margin-bottom: 24px;
`

export const OnDietButtonsSectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const MealDateAndHourInfo = styled.View`
  ${({ theme }) => css`
    gap: 20px;
    flex-direction: row;
  `}
`

export const MealChangeStateButton = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 8px;
    flex-direction: row;
  `}
`
