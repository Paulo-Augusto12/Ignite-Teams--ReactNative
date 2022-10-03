//Importações de estilos

import { Container, Form } from './style'

//Importações de componentes

import { Header } from '@components/Header'
import { HightLight } from '@components/HighLight'
import {ButtonIcon} from '@components/ButtonIcon'
import { Input } from '@components/Input'



type props = {

}


export function Players(){


    return(
        <Container>
            <Header showBackButton />

            <HightLight 
                title="Nome da turma"
                subtitle="Adicione mais membros e separe as equipes"
            />
            
        <Form> 
            <Input 
            placeholder='Nome do participante'
            autoCorrect={false}
            />
            <ButtonIcon 
                icon='add'
            />
        </Form>
        </Container>
    )
}