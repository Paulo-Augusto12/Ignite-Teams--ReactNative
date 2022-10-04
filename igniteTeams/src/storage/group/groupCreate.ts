import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLECTION } from '../storageConfig'
import { groupsGetAll } from './groupsGetAll'

export async function groupCreate(newGroupName:string){

    try{
        const storagedGroups = await groupsGetAll();
        const storage = JSON.stringify([...storagedGroups ,newGroupName])

        await AsyncStorage.setItem(GROUP_COLECTION , storage)
    }

    catch(error){
        throw error;
    }
}