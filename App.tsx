import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'

import { AppRouter } from './src/routes'

import { theme } from './src/theme'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" style="dark" />
      {fontsLoaded && <AppRouter />}
    </ThemeProvider>
  )
}
