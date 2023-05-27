import { Text, View } from 'react-native'

import * as Styled from './styled'

type FeedbackHeaderProps = {
  type: Styled.FeedbackType
}

export const FeedbackHeader = ({ type = 'GOOD' }: FeedbackHeaderProps) => {
  return (
    <View>
      {type === 'GOOD' ? (
        <>
          <Styled.Feedback>
            <Styled.FeedbackHeader type={type}>
              Continue assim!
            </Styled.FeedbackHeader>
            <Styled.FeedbackDescriptionContainer>
              <Text>Você continua </Text>
              <Text style={{ fontWeight: '800' }}>dentro da dieta </Text>
              <Text>Muito bem!</Text>
            </Styled.FeedbackDescriptionContainer>
          </Styled.Feedback>
        </>
      ) : (
        <>
          <Styled.Feedback>
            <Styled.FeedbackHeader type={type}>Que pena!</Styled.FeedbackHeader>
            <Styled.FeedbackDescriptionContainer>
              <Text>Você </Text>
              <Text style={{ fontWeight: '800' }}>saiu da dieta </Text>
              <Text>dessa vez, mas continue se esforçando e não desista!</Text>
            </Styled.FeedbackDescriptionContainer>
          </Styled.Feedback>
        </>
      )}
    </View>
  )
}
