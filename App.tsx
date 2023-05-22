import { Text, View } from 'react-native'

import { theme } from './src/theme'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>App</Text>
      </View>
    </ThemeProvider>
  )
}
