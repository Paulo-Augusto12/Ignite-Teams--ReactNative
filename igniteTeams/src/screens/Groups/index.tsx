//Importações do React
import { useState, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { groupsGetAll } from  '@storage/group/groupsGetAll'

//Estilos
import { Container } from './style'

//Componentes
import { Header } from '@components/Header'
import {HightLight} from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'
import {EmptyList} from '@components/EmptyList'
import {Button} from '@components/Button'



export function Groups(){
    const [groups , setGroups] = useState<string[]>([])
    const navigation = useNavigation()
    

    function handleNewGroup(){
        navigation.navigate('new')
    }

    async function fetchGroups(){
        try{
            const data = await groupsGetAll()
            setGroups(data)
        }
        catch(error){
            console.log(error)
        }
    }

    function handleOpenGroup(group:string){
        navigation.navigate('players', {group})
    }


    useFocusEffect(useCallback(()=>{
        console.log("useFocusEffect Executou")
        fetchGroups()
    },[]))

    return(
        <Container>
            <Header />

            <HightLight 
                title="Turmas"
                subtitle="jogue com sua turma"
            />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <GroupCard 
                    title={item}
                    onPress={() => handleOpenGroup(item)}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <EmptyList 
                    message="Que tal cadastrar a primeira turma ?"
                    />
                )}
                showsVerticalScrollIndicator={false}
            />

            <Button 
                title='Criar uma nova turma'
                type={'PRIMARY'}
                onPress={handleNewGroup}
            />
        </Container>
    )
}

  