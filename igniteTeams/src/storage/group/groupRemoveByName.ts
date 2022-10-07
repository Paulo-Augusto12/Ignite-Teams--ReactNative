import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLECTION, PLAYER_COLECTION } from '@storage/storageConfig'

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(deletedGroup:string){

    try{

        const storedGroups = await groupsGetAll()

        const filteredGroups = storedGroups.filter(group => group !== deletedGroup)


        await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify(filteredGroups));
        
        await AsyncStorage.removeItem(`${PLAYER_COLECTION}-${deletedGroup}`)

    }catch(error){
        throw error;
    }
}