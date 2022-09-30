import { Header } from '@components/Header'
import { HightLight } from '@components/HighLight'
import { Container } from './style'



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
        </Container>
    )
}