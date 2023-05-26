import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/home'
import { Statistics } from '@screens/statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  )
}
