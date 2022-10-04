import AsyncStorage from '@react-native-async-storage/async-storage'

import {GROUP_COLECTION} from '@storage/storageConfig'


export async function groupsGetAll(){
    try{
        const storage = await AsyncStorage.getItem(GROUP_COLECTION)

        const groups:string[] = storage ? JSON.parse(storage) : [];

        return groups;
    }
    catch(error){
        throw error;
    }
    
}