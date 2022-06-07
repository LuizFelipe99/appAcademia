import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Ficha from '../pages/Ficha';
import Mensalidades from '../pages/Mensalidades';
import Treinos from '../pages/Treinos';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator 
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        
        drawerActiveBackgroundColor: '#03e45e',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'

      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Inicio'
        }}
      />

      <Drawer.Screen
        name="Ficha"
        component={Ficha}
      />

      <Drawer.Screen
        name="Mensalidades"
        component={Mensalidades}
      />
      <Drawer.Screen
        name="Treinos"
        component={Treinos}
      />
    </Drawer.Navigator>
  )
}