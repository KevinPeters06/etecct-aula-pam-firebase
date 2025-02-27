import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastrar from '../paginas/cadastro'
import StackRoutes from './stackRoutes'
import Detalhes from '../paginas/detalhes/index'
const Tab = createBottomTabNavigator();

export default function Rotas (){

    return(

        <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'red'}}}>
            <Tab.Screen name = 'homeStack' component={StackRoutes} />
            <Tab.Screen name = 'cadastrar' component={Cadastrar} />
            <Tab.Screen name="Detalhes" component={Detalhes} />

        </Tab.Navigator>

    );
}