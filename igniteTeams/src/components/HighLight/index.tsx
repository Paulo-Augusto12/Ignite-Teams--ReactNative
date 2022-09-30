//IMportações do React Native

//Estilos
import { Container, Title, SubTitle } from './style'


type props = {
    title:string;
    subtitle:string;
}

export function HightLight({title , subtitle}:props){


    return(
        <Container>
            
            <Title>
                {title}
            </Title>
            
            <SubTitle>
                {subtitle}
            </SubTitle>
        
        </Container>
    )
}