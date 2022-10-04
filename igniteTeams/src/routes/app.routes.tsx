//Importações do React

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importações de componentes

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';



const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes(){

    return(
        <Navigator>
            <Screen 
                name="groups"
                component={Groups}
            />
            <Screen 
                name="new"
                component={NewGroup}
            />
            <Screen 
                name="players"
                component={Players}
            />
        </Navigator>
    );

}