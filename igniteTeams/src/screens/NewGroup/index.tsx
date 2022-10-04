//Importações do React
import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'

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

    const navigation = useNavigation()
    const [group, setGroup] = useState('')

    async function handleNew (){
        
        try{
            await groupCreate(group)
        }
        catch(error){
            console.log(error)
        }
        
        navigation.navigate('players' , { group })
    
    }

    return(
        <Container>
                <Header showBackButton/>

                <Content>
                    <Icon />

                    <HightLight 
                    title="Nova turma"
                    subtitle="Crie uma turma para adicionar os membros"
                    />

                    <Input 
                    placeholder='Nome da turma'
                    onChangeText={setGroup}
                    />

                    <Button 
                    title="Criar" 
                    style={{marginTop:20}}
                    onPress={handleNew}
                    />
                </Content>
        </Container>
    )
}