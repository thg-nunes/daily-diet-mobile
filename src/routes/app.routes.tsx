import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Meal } from '@utils/storage/meal/types'

import { Home } from '@screens/home'
import { Create } from '@screens/create'
import { FeedBack } from '@screens/feedBack'
import { EditeMeal } from '@screens/editeMeal'
import { Statistics } from '@screens/statistics'
import { MealsDetails, MealsDetailsProps } from '@screens/mealsDetails'
import { UseMealsOfDietPercentResponse } from '@hooks/screens/home'

export type Routes = {
  Home: undefined
  New: undefined
  FeedBack: {
    mealOnDiet: boolean
  }
  EditeMeal: Meal
  MealsDetails: MealsDetailsProps
  Statistics: UseMealsOfDietPercentResponse
}

const { Navigator, Screen } = createNativeStackNavigator<Routes>()

export function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="New" component={Create} />
      <Screen name="FeedBack" component={FeedBack} />
      <Screen name="EditeMeal" component={EditeMeal} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="MealsDetails" component={MealsDetails} />
    </Navigator>
  )
}
