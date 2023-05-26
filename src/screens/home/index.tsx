import { Image, SectionList } from 'react-native'

import * as Styled from './styled'

import User from '@assets/user/userIcon.png'
import Logo from '@assets/logo/Logo.png'

import { Button } from '@components/button'
import { Percent } from '@components/percent'
import { MealInfo } from '@components/mealInfo'

export const Home = () => {
  const mealByDate = [
    {
      sectionDate: '12.08.22',
      data: [
        {
          hour: '20:00',
          mealName: 'X-tudo',
          onDiet: true
        },
        {
          hour: '16:00',
          mealName: 'Whey protein com leite',
          onDiet: false
        }
      ]
    },
    {
      sectionDate: '11.08.22',
      data: [
        {
          hour: '20:00',
          mealName: 'Salada cesar com frango grelhado',
          onDiet: true
        },
        {
          hour: '16:00',
          mealName: 'Vitamina de banana com abacate',
          onDiet: false
        }
      ]
    }
  ]

  return (
    <Styled.Container>
      <Styled.Header>
        <Image source={Logo} />
        <Image source={User} />
      </Styled.Header>

      <Percent
        percentValue={32}
        percentDescription="das refeições dentro da dieta"
      />

      <Styled.NewMealSection>
        <Styled.NewMealSectionHeader>Refeições</Styled.NewMealSectionHeader>
        <Button text="Nova refeição" type="ADD" />
      </Styled.NewMealSection>

      <SectionList
        sections={mealByDate}
        keyExtractor={(item) => item.mealName}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <MealInfo
            hour={item.hour}
            mealName={item.mealName}
            mealOnTheDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { sectionDate } }) => (
          <Styled.HeaderDateSection>{sectionDate}</Styled.HeaderDateSection>
        )}
      />
    </Styled.Container>
  )
}
