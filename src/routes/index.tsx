import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

export function AppRouter() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
