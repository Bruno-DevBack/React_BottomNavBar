import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Home from '../pages/Home';
import Alerta from '../pages/Alerta';
import Usuarios from '../pages/Usuarios';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: { backgroundColor: '#252525' },
        safeAreaInsets: { bottom: 0 }, // Remove a barra branca embaixo
        activeTintColor: '#660000', // Cor alterada ao clicar no ícone
        inactiveTintColor: '#fff', // Cor para ícones inativos
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'FOR YOU',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Alerta"
        component={Alerta}
        options={{
          tabBarLabel: 'PLAYLIST',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Usuarios"
        component={Usuarios}
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}
