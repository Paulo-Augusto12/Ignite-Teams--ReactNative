//Importações do React

import { useState } from 'react'
import { FlatList } from 'react-native'

//Importações de estilos

import { Container, Form, HeaderList, NumberOfPlayers } from './style'

//Importações de componentes

import { Header } from '@components/Header'
import { HightLight } from '@components/HighLight'
import {ButtonIcon} from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'



type props = {

}


export function Players(){

    const [team , setTeam] = useState('Time A')
    const [numberOfPlayer, setNumberOfPlayers] = useState([])

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
        
        <HeaderList>
            <FlatList
                data={['Time A', 'Time B']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter 
                        title={item}
                        isActive={item === team}
                        onPress={()=> setTeam(item)}
                    />        
                )}
                horizontal
            />
            <NumberOfPlayers>
                {numberOfPlayer.length}
            </NumberOfPlayers>
        </HeaderList>       
        </Container>
    )
}