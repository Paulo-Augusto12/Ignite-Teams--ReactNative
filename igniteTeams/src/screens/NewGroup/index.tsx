//Importações do React

import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'

//Importação de Estilos

import { Container, Content, Icon } from './style'

//Importação de Componentes

import { Header } from '@components/Header';
import { HightLight } from '@components/HighLight';
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Alert } from 'react-native'



type props = {
    
    title?:string;

}

export function NewGroup({title}:props){

    const navigation = useNavigation()
    const [group, setGroup] = useState('')

    async function handleNew (){
        
        try{
            
            if(group.trim().length == 0){
                return Alert.alert('Erro ao criar nova Turma', 'Por favor, ao criar uma turma insira um nome a turma')
            }
            await groupCreate(group)
            navigation.navigate('players' , { group })
        }
        catch(error){
            
            if (error instanceof AppError){
                    Alert.alert('Erro ao criar nova Turma', error.message)
            }

            else{
                    Alert.alert('Erro em novo grupo', 'Não foi possível criar um novo grupo')
                    console.log(error)
            }
        }
        
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