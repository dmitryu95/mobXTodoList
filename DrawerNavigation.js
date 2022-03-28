import React, {useState, useEffect} from 'react';
import Auth from './src/Auth';
import Navigate from './navigate';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Store } from './src/stores/emailPasswordStore';
import { observer, inject } from 'mobx-react';

const Drawer = createDrawerNavigator();

const DrawerNavigation = inject('Store', 'StoreToDo')(observer(() => {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name='Ваш логин: ' 
                            children={Navigate} 
                            options={{headerShown: false, title:'Ваш логин: ' + Store.email }} />
            <Drawer.Screen name="Выйти из учетной записи" component={Auth} options={{ headerShown: false }}/>
        </Drawer.Navigator>
    )
})
)

export default DrawerNavigation;