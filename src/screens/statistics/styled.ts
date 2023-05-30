import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  percentValue: number
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  ${({ theme, percentValue }) => css`
    flex: 1;
    background: ${percentValue >= 50
      ? theme.colors.green[50]
      : theme.colors.red[50]};
  `}
`

export const PercentContainer = styled.View`
  margin: 24px 0 32px 0;
`

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 23px;
    padding: 33px 24px;

    margin-top: -24px;

    background: ${theme.colors.gray[100]};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `}
`

export const ContentHeader = styled.Text`
  ${({ theme }) => css`
    text-align: center;

    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const MealsStatusContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
  `}
`
