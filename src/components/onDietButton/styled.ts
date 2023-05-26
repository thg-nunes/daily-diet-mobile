import { Pressable } from 'react-native'
import { Circle } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  onDiet?: boolean
  buttonType?: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled(Pressable)<ContainerProps>`
  ${({ theme, onDiet, buttonType }) => css`
    flex: 1;
    height: 50px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 8px;
    padding: 16px;
    border-radius: 6px;
    background: ${onDiet === undefined
      ? theme.colors.gray[300]
      : onDiet && buttonType === 'PRIMARY'
      ? theme.colors.green[50]
      : theme.colors.red[50]};

    border-width: ${onDiet === undefined ? 0 : 1}px;
    border-color: ${onDiet === undefined
      ? 'transparent'
      : onDiet && buttonType === 'PRIMARY'
      ? theme.colors.green[900]
      : theme.colors.red[900]};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-family: ${theme.font_familly.bold};
    font-size: ${theme.font_size.md}px;
  `}
`

export const CircleIcon = styled(Circle).attrs(({ color }) => ({
  weight: 'fill',
  size: 8,
  color
}))``
