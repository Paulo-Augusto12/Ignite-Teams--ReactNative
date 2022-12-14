//Importações do React

//Importações de estilo

import { Container, Name, Icon } from './style'

//Importações de componente

import { ButtonIcon } from '@components/ButtonIcon'

type props = {
    name:string
    onRemove: () => void
}


export function PlayerCard ({name, onRemove}:props){

    return(
        <Container>
            
            <Icon 
            name="person" 
            
            />
            
            <Name>
                {name}
            </Name>

            <ButtonIcon     
                icon="close"
                type="SECONDARY"
                onPress={onRemove}
            
            />
        
        </Container>
    )
}