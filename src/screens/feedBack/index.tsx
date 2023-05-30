import { Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/button'
import { FeedbackHeader } from '@components/feedbackHeader'
import { FeedbackType } from '@components/feedbackHeader/styled'

import BadFeedbackImage from '@assets/feedback/bad.png'
import GoodFeedbackImage from '@assets/feedback/good.png'

import * as Styled from './styled'

type Params = {
  mealOnDiet: FeedbackType
}

export const FeedBack = () => {
  const { params } = useRoute()
  const { mealOnDiet } = params as Params
  const { navigate } = useNavigation()

  function handleHomeScreen() {
    navigate('Home')
  }

  return (
    <Styled.Container>
      <FeedbackHeader mealOnDiet={mealOnDiet} />
      {mealOnDiet ? (
        <Image source={GoodFeedbackImage} />
      ) : (
        <Image source={BadFeedbackImage} />
      )}
      <Button text="Ir para a página inicial" onPress={handleHomeScreen} />
    </Styled.Container>
  )
}
