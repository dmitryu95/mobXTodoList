import React from 'react';
import Auth from './src/Auth';
import Notes from './src/Notes';
import Registration from './src/Registration';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const Navigate = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                options={{headerShown: false}}
                name='Auth'
                component={Auth} />
            <Stack.Screen
                options={{headerShown: false}}
                name='Notes'
                component={Notes} />
            <Stack.Screen
                options={{headerShown: false}}
                name='Registration'
                component={Registration} />
        </Stack.Navigator>
    )
}

// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//     return(
//         // Ломается

//         <Drawer.Navigator initialRouteName="Продолжить">
//             <Drawer.Screen name="Выйти" component={Auth} options={{headerShown: false}}/>
//             <Drawer.Screen name="Продолжить" component={Navigate} options={{headerShown: false}}/> 
//         </Drawer.Navigator>
//     )
// }

export default () => (
     <NavigationContainer>
     {/* Для выставления навигации как ранее <Navigate/> вместо нижней строчки*/}
        <Navigate />
     </NavigationContainer>
);