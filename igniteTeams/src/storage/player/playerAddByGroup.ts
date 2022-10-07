import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLECTION } from '../storageConfig'

import { PlayerStorageDTO } from './playerStorageDTO'
import { playersGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup(newPlayer:PlayerStorageDTO, group:string){

    try {
        
        const storedPlayers = await playersGetByGroup(group);
        
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já foi adicionada a um time')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer])
        
        await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, storage)

    } 
    
    catch (error) {
        throw error
    }
}