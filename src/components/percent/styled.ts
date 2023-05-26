import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native'

export type PercentType = 'PRIMARY' | 'SECONDARY'

type ContainerProps = {
  type?: PercentType
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, type }) => css`
    position: relative;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    padding: 20px 16px;
    border-radius: 8px;
    background: ${type === 'PRIMARY'
      ? theme.colors.green[50]
      : theme.colors.red[50]};
  `}
`

export const TextContainer = styled.View`
  flex: 1;
  gap: 2px;
  align-items: center;
`

export const ButtonRightIconContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(() => ({
  size: 24
}))``

export const ButtonLeftIconContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  left: 8px;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs<ContainerProps>(() => ({
  size: 24
}))``

export const PercentValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[800]};
    font-size: ${theme.font_size['3xl']}px;
    font-family: ${theme.font_familly.bold};
  `}
`

export const PercentDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_familly.regular};
  `}
`
