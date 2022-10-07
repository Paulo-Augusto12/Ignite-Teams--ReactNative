//Importações do React
import { TouchableOpacityProps } from "react-native";

//Importações de estilo
import { Container, Icon, ButtonIconTypeStyleProps } from './style'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap; 
    type?:string
}

export function ButtonIcon ({icon, type = 'PRIMARY', ...rest}:Props){

    return(
        <Container {...rest}>
            <Icon name={icon} type="SECONDARY"/>    
        </Container>
    )
}