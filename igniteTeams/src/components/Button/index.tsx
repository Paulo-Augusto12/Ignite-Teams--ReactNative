import { TouchableOpacityProps } from 'react-native'

import { Container, Title, ButtonTypeStyledProps } from './style'


type props = TouchableOpacityProps & {
    title:string;
    type?:ButtonTypeStyledProps;
}

export function Button({title, type = 'PRIMARY' , ...rest}:props){

    return(
        <Container
        type={type}
        {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}