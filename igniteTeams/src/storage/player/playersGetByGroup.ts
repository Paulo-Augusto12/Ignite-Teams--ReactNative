import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLECTION } from "@storage/storageConfig";


export async function playersGetByGroup(group:string){

    try{
        const storage = await AsyncStorage.getItem(`${PLAYER_COLECTION}-${group}`)

        const players:PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
        
        return players;
    }
    catch(error){
        throw error;
    }

}