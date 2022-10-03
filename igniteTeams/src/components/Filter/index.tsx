//Importações do React
import { TouchableOpacityProps } from 'react-native'

//Importações de estilos

import { Container, Title, FilterStyleProps } from './style'


type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }:Props){

    return(

        <Container isActive={isActive}{...rest}>
            <Title>{title}</Title>
        </Container>
    
    )
}