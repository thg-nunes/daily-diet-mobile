import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/button'
import { FeedbackHeader } from '@components/feedbackHeader'
import { FeedbackType } from '@components/feedbackHeader/styled'

import BadFeedbackImage from '@assets/feedback/bad.png'
import GoodFeedbackImage from '@assets/feedback/good.png'

import * as Styled from './styled'

type FeedBackProps = {
  mealOnDiet: FeedbackType
}

export const FeedBack = ({ mealOnDiet = 'GOOD' }: FeedBackProps) => {
  // const { navigate } = useNavigation()

  function handleHomeScreen() {
    // navigate('Home')
  }

  return (
    <Styled.Container>
      <FeedbackHeader type={mealOnDiet} />
      {mealOnDiet === 'GOOD' ? (
        <Image source={GoodFeedbackImage} />
      ) : (
        <Image source={BadFeedbackImage} />
      )}
      <Button text="Ir para a página inicial" onPress={handleHomeScreen} />
    </Styled.Container>
  )
}
