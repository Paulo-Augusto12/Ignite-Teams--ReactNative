//Importações do React


//Importação de Estilos
import { Container, Content, Icon } from './style'

//Importação de Componentes
import { Header } from '@components/Header';
import { HightLight } from '@components/HighLight';
import { Input } from '@components/Input'
import { Button } from '@components/Button'


type props = {

    title?:string;
}

export function NewGroup({title}:props){

    return(
        <Container>
                <Header showBackButton/>

                <Content>
                    <Icon />

                    <HightLight 
                    title="Nova turma"
                    subtitle="Crie uma turma para adicionar os membors"
                    />

                    <Input 
                    placeholder='Nome da turma'
                    />

                    <Button title="Criar" style={{marginTop:20}}/>
                </Content>
        </Container>
    )
}