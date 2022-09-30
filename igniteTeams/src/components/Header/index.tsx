
//Estilos

import { Container, Logo, BackIcon, BackButton } from './style';
//Assets

import logoImg from '@assets/logo.png';


type props = {
    showBackButton?:boolean
}

export function Header({showBackButton = false}:props){

    return(
        <Container>
            
            { 
                showBackButton && 
            <BackButton>
                <BackIcon />
            </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    )
}