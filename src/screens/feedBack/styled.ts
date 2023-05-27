import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;

    gap: 40px;

    padding: 0 32px;
    background: ${theme.colors.gray[100]};
  `}
`
