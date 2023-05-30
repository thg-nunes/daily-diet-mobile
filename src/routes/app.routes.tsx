import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/home'
import { Create } from '@screens/create'
import { FeedBack } from '@screens/feedBack'
import { Statistics } from '@screens/statistics'
import { UseMealsOfDietPercentResponse } from '@hooks/screens/home'

export type Routes = {
  Home: undefined
  New: undefined
  FeedBack: {
    mealOnDiet: boolean
  }
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
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  )
}
