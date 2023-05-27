import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type ContainerProps = {
  type?: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, type }) => css`
    flex: 1;
    gap: 12px;
    height: 50px;
    max-height: 50px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;
    border-radius: 6px;

    border-width: ${type === 'PRIMARY' ? 0 : 1}px;
    border-color: ${type === 'PRIMARY' && theme.colors.gray[800]};
    background: ${type === 'PRIMARY'
      ? theme.colors.gray[700]
      : theme.colors.gray[100]};
  `}
`

export const ButtonText = styled.Text<ContainerProps>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY'
      ? theme.colors.gray[100]
      : theme.colors.gray[800]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.bold};
  `}
`
