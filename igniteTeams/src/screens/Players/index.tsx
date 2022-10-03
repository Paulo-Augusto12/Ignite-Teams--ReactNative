//Importações do React

import { useState } from 'react'
import { FlatList } from 'react-native'

//Importações de estilos

import { Container, Form, HeaderList, NumberOfPlayers } from './style'

//Importações de componentes

import { Header } from '@components/Header'
import { EmptyList } from '@components/EmptyList'
import { HightLight } from '@components/HighLight'
import {ButtonIcon} from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'



type props = {

}


export function Players(){

    const [team , setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Loud', 'Red', 'Pain Gaming', 'INTZ', 'Furia', 'Miners', 'Los Grandes', 'Kabum'])

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
                {players.length}
            </NumberOfPlayers>
        </HeaderList>

        <FlatList
            data={players}
            keyExtractor={item => item}
            renderItem={({item})=> (
                <PlayerCard 
                    name={item}
                    onRemove={()=>{}}
                />
            )}
            ListEmptyComponent={()=>(
                <EmptyList 
                    message="Não há nenhum participante nesta equipe"
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom:110,},
                players.length === 0 && {flex:1}
            ]}
        />
        
        <Button 
        title='Remover Turma'
        type="SECONDARY"
        />
    
        </Container>
    )
}