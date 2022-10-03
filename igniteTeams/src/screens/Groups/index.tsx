//Importações do React
import { useState } from 'react'
import { FlatList } from 'react-native'

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

    return(
        <Container>
            <Header  showBackButton/>

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
            />
        </Container>
    )
}

  