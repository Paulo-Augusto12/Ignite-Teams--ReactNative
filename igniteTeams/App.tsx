//Importações do React Native

import { StatusBar } from 'react-native';

//Estilizações

import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/index'

//Componentes

import { Groups } from '@screens/Groups';
import {NewGroup} from '@screens/NewGroup'
import { Players } from '@screens/Players'
import { Loading } from '@components/Loading';
import { Header } from '@components/Header';

//Rotas

import { Routes } from './src/routes'




export default function App() {
   
  const[ fontsLoaded ] = useFonts({ Roboto_400Regular , Roboto_700Bold });
 

  return( 
   
      <ThemeProvider theme={theme}> 
         <StatusBar 
         barStyle="light-content"
         backgroundColor="transparent"
         translucent   
         />

         { fontsLoaded ?  <Routes /> : <Loading /> }

      
      </ThemeProvider>
 )
}
