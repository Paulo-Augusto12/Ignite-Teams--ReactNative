//Importações do React
import { TextInputProps, TextInput } from "react-native";

//Importações de Estilos
import { Container } from './style'
import { useTheme } from 'styled-components/native'

//Tipos e interfaces
type props = TextInputProps &{
    inputRef?: React.RefObject<TextInput>;
}


export function Input({inputRef, ...rest}:props){

    const { COLORS } = useTheme()

    return(
        <Container 
            ref={inputRef}
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )


}