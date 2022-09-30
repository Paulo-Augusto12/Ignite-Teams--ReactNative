//Importações do React
import { TouchableOpacityProps } from 'react-native'

//Estilos
import { Container, Title, Icon } from './style'

type props = TouchableOpacityProps & {
    title:string
}

export function GroupCard({title, ...rest}:props){

    return(
        <Container {...rest} >
            <Icon />
                <Title>
                    {title}
                </Title>
        </Container>
    )
}