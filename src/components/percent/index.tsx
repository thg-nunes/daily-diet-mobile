import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import * as Styled from './styled'

type PercentProps = {
  percentValue: number
  type?: Styled.PercentType
  percentDescription: string
}

export const Percent = ({
  type = 'PRIMARY',
  percentValue = 0,
  percentDescription = ''
}: PercentProps) => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  function handleHome(): void {
    navigate('Home')
  }

  function handleStatistics(): void {
    navigate('Statistics')
  }

  return (
    <Styled.Container type={percentValue > 50 ? 'PRIMARY' : 'SECONDARY'}>
      {type === 'SECONDARY' && (
        <Styled.ButtonLeftIconContainer onPress={handleHome}>
          <Styled.ArrowLeftIcon
            color={percentValue > 50 ? colors.green[900] : colors.red[900]}
          />
        </Styled.ButtonLeftIconContainer>
      )}
      <Styled.TextContainer>
        <Styled.PercentValue>{percentValue.toFixed(2)}%</Styled.PercentValue>
        <Styled.PercentDescription>
          {percentDescription}
        </Styled.PercentDescription>
      </Styled.TextContainer>
      {type === 'PRIMARY' && (
        <Styled.ButtonRightIconContainer onPress={handleStatistics}>
          <Styled.ArrowUpRightIcon
            color={percentValue > 50 ? colors.green[900] : colors.red[900]}
          />
        </Styled.ButtonRightIconContainer>
      )}
    </Styled.Container>
  )
}
