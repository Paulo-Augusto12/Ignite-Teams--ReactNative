//Importações do React
import { TextInputProps } from "react-native";

//Importações de Estilos
import { Container } from './style'
import { useTheme } from 'styled-components/native'

//Tipos e interfaces
type props = TextInputProps


export function Input({...rest}:TextInputProps){

    const { COLORS } = useTheme()

    return(
        <Container 
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )


}