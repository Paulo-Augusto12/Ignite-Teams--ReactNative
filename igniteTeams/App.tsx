//Importações do React Native

import { ActivityIndicator } from 'react-native'

//Estilizações

import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/index'

//Componentes

import { Groups } from '@screens/Groups';




export default function App() {
 
  const[ fontsLoaded ] = useFonts({ Roboto_400Regular , Roboto_700Bold });
 

  return( 
      <ThemeProvider theme={theme}> 

         { fontsLoaded ?  <Groups /> : <ActivityIndicator /> }
      
      </ThemeProvider>
 )
}
