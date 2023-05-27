import styled, { css } from 'styled-components/native'

export type FeedbackType = 'GOOD' | 'BAD'

type ContainerProps = {
  type: FeedbackType
}

export const Feedback = styled.View`
  ${({ theme }) => css`
    gap: 8px;
    align-items: center;
  `}
`

export const FeedbackHeader = styled.Text<ContainerProps>`
  ${({ theme, type }) => css`
    color: ${type === 'GOOD' ? theme.colors.green[900] : theme.colors.red[900]};
    font-size: ${theme.font_size['2xl']}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const FeedbackDescriptionContainer = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_familly.regular};
  `}
`
