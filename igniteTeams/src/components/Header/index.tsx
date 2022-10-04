//Importações do React
import { useNavigation } from '@react-navigation/native'

//Estilos

import { Container, Logo, BackIcon, BackButton } from './style';
//Assets

import logoImg from '@assets/logo.png';


type props = {
    showBackButton?:boolean
}


export function Header({showBackButton = false}:props){

    const Navigation = useNavigation()

    function handleGoHome(){
        Navigation.navigate('groups')
    }


    return(
        <Container>
            
            { 
                showBackButton && 
            <BackButton onPress={handleGoHome}>
                <BackIcon />
            </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    )
}