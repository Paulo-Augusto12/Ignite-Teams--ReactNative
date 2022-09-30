

import { Container, Message } from './style'


type props = {
    message:string
}

export function EmptyList({message}:props){

    return(
        <Container>
            <Message>
                {message}
            </Message>
        </Container>
    )
}