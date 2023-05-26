import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)``

export const Header = styled.View`
  margin: 35px 0;

  flex-direction: row;
  justify-content: space-between;
`

export const NewMealSection = styled.View`
  gap: 8px;
  margin: 32px 0;
`

export const NewMealSectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-family: ${theme.font_familly.regular};
    font-size: ${theme.font_size.lg}px;
  `}
`

export const HeaderDateSection = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_familly.bold};
  `}
`
