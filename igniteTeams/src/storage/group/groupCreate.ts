import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLECTION } from '../storageConfig'
import { groupsGetAll } from './groupsGetAll'

import { AppError } from '@utils/AppError'

export async function groupCreate(newGroupName:string){

    try{
        const storedGroups = await groupsGetAll();

        const groupAlreadyExist = storedGroups.includes(newGroupName)

        if(groupAlreadyExist === true){
            throw new AppError('Já existe uma turma cadastrada com esse nome !');
        }

        const storage = JSON.stringify([...storedGroups ,newGroupName])

        await AsyncStorage.setItem(GROUP_COLECTION , storage)
    }

    catch(error){
        throw error;
    }
}