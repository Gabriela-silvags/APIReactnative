import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Criar from './src/pages/Criar';
import Consultar from './src/pages/Consultar';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Buscador de Livros' screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#c71585' },
      }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Criar" component={Criar}  />
        <Stack.Screen name="Consultar" component={Consultar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


