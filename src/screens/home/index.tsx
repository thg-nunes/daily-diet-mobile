import { Plus } from 'phosphor-react-native'
import { Image, SectionList } from 'react-native'

import * as Styled from './styled'

import {
  useHandleMealInfo,
  useMealsOfDietPercent,
  useRenderInitialData
} from '@hooks/screens/home'

import User from '@assets/user/userIcon.png'
import Logo from '@assets/logo/Logo.png'

import { Button } from '@components/button'
import { Percent } from '@components/percent'
import { MealInfo } from '@components/mealInfo'

export const Home = () => {
  const { colors, allMeals, handleNewMeal } = useRenderInitialData()
  const { ...data } = useMealsOfDietPercent(allMeals)
  const { handleMealInfo } = useHandleMealInfo()

  return (
    <Styled.Container>
      <Styled.Header>
        <Image source={Logo} />
        <Image source={User} />
      </Styled.Header>

      <Percent
        statisticsParams={data}
        percentValue={data._mealsOfDietPercent}
        percentDescription="das refeições dentro da dieta"
      />

      <Styled.NewMealSection>
        <Styled.NewMealSectionHeader>Refeições</Styled.NewMealSectionHeader>
        <Button
          text="Nova refeição"
          onPress={handleNewMeal}
          image={<Plus size={18} color={colors.gray[100]} />}
        />
      </Styled.NewMealSection>

      <SectionList
        sections={allMeals}
        keyExtractor={(item) => item.mealName}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 60 }}
        renderItem={({ item, section }) => (
          <MealInfo
            hour={item.hour}
            mealName={item.mealName}
            mealOnTheDiet={item.mealsOnDiet}
            onPress={() => handleMealInfo({ item, date: section.sectionDate })}
          />
        )}
        renderSectionHeader={({ section: { sectionDate } }) => (
          <Styled.HeaderDateSection>{sectionDate}</Styled.HeaderDateSection>
        )}
      />
    </Styled.Container>
  )
}
