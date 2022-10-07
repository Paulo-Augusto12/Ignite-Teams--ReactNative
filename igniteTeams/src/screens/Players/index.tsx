//Importações do React

import { useState, useEffect, useRef } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

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


//Importações do Storage

import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playersGetByGroup } from '@storage/player/playersGetByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO'
import { groupRemoveByName } from '@storage/group/groupRemoveByName'


type RouteParams = {
    group:string
}


export function Players(){

    const [newPlayerName , setNewPlayerName] = useState('')
    const [team , setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    
    
    const navigation = useNavigation()
    const route = useRoute()
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null)

    

    async function handleAddPlayer() {
        
        if(newPlayerName.trim().length === 0){
            console.log('Erro no nome do Participante')
            return Alert.alert('Erro ao criar novo participante' , 'Por favor, ao criar um participante insira o nome do participante');
        }

        const newPlayer = {
            name:newPlayerName,
            team,
        }
    
        try {
            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur()            

            setNewPlayerName('')
            await fetchPlayersByTeam()
            
            // console.log('Adicionou => ',players ,' ao grupo' , group)
        } 
        
        catch(error) {
            if(error instanceof AppError){
                Alert.alert('Erro ao adicionar novo participante', error.message)
            }else{
                // console.log(error)
                Alert.alert('Erro em novo participante' , 'deu ruim')
            }
        }
    }

    async function fetchPlayersByTeam(){

        try{
            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam);
        }
        catch (error){
            // console.log(error)
            Alert.alert('Erro', 'Deu pra pegar não')
        }
    }


    async function handlePlayerRemove(playerName:string){
        try{

            await playerRemoveByGroup(playerName, group);

            fetchPlayersByTeam();
            
            console.log('Removeu => ' , playerName)

        }catch(error){
            console.log(error)
            Alert.alert('Erro ao remover', 'Não foi possível remover a pessoa selecionada')
        }
    }

    async function removeGroup(){
        
        try{
            await groupRemoveByName(group)
            navigation.navigate('groups')
            
        }catch(error){
            console.log(error)
        }
    }

    async function handleRemoveGroup(){
        Alert.alert('Remover grupo ?', 'Esta ação irá remover o grupo, tem certeza disso ?',
        [
            {text:'Não', style:'cancel'},
            {text:'Sim', onPress:()=> removeGroup()}
        ])
    }

    useEffect(()=>{
        fetchPlayersByTeam()
    },[team])

    return(
        <Container>
            <Header showBackButton />

            <HightLight 
                title={group}
                subtitle="Adicione mais membros e separe as equipes"
            />
            
        <Form> 
            
            <Input
                inputRef={newPlayerNameInputRef}
                placeholder='Nome do participante'
                onChangeText={setNewPlayerName}
                value={newPlayerName}
                autoCorrect={false}
                onSubmitEditing={handleAddPlayer}
                returnKeyType='done'
            />
            
            <ButtonIcon 
                icon='add'
                onPress={handleAddPlayer}
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
            keyExtractor={item => item.name}
            renderItem={({ item })=> (
                <PlayerCard 
                    name={item.name}
                    onRemove={()=> handlePlayerRemove(item.name)}
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
        onPress={handleRemoveGroup}
        />
    
        </Container>
    )
}