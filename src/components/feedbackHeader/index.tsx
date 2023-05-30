import { Text, View } from 'react-native'

import * as Styled from './styled'

type FeedbackHeaderProps = {
  mealOnDiet: Styled.FeedbackType
}

export const FeedbackHeader = ({ mealOnDiet }: FeedbackHeaderProps) => {
  return (
    <View>
      {mealOnDiet ? (
        <>
          <Styled.Feedback>
            <Styled.FeedbackHeader mealOnDiet={mealOnDiet}>
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
            <Styled.FeedbackHeader mealOnDiet={mealOnDiet}>
              Que pena!
            </Styled.FeedbackHeader>
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
