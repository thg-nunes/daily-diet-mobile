import { useTheme } from 'styled-components/native'
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

  return (
    <Styled.Container type={percentValue > 50 ? 'PRIMARY' : 'SECONDARY'}>
      {type === 'SECONDARY' && (
        <Styled.ArrowLeftIcon
          color={percentValue > 50 ? colors.green[900] : colors.red[900]}
        />
      )}
      <Styled.TextContainer>
        <Styled.PercentValue>{percentValue}%</Styled.PercentValue>
        <Styled.PercentDescription>
          {percentDescription}
        </Styled.PercentDescription>
      </Styled.TextContainer>
      {type === 'PRIMARY' && (
        <Styled.ArrowUpRightIcon
          color={percentValue > 50 ? colors.green[900] : colors.red[900]}
        />
      )}
    </Styled.Container>
  )
}
