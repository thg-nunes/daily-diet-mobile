import styled, { css } from 'styled-components/native'

type InputProps = {
  isMultiline?: boolean
}

export const Container = styled.View`
  ${({ theme }) => css`
    gap: 4px;
  `}
`

export const Input = styled.TextInput<InputProps>`
  ${({ theme, isMultiline }) => css`
    height: ${isMultiline ? 'auto' : '48px'};
    padding: 14px;

    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_familly.bold};

    border-width: 1px;
    border-color: ${theme.colors.gray[400]};
    border-radius: 6px;
  `}
`

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.bold};
  `}
`
